import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract, BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { time } from "@openzeppelin/test-helpers";
import { proposalArgs1, proposalArgs2 } from "./utils";

const ABSTAIN = 0
const YAY = 1
const NAY = 2
const MEMBER_VOTES_YAY = [ABSTAIN, YAY, YAY, YAY, NAY, NAY]
const MEMBER_VOTES_NAY = [NAY, NAY, NAY, NAY, YAY, YAY]
const NO_PROPOSAL = 3
const ONE_WEEK = 86400 * 7

describe("AssemblyDAO", () => {
    
    let owner: SignerWithAddress;
    let member1: SignerWithAddress;
    let member2: SignerWithAddress;
    let member3: SignerWithAddress;
    let member4: SignerWithAddress;
    let member5: SignerWithAddress;
    let member6: SignerWithAddress;
    let tribune: SignerWithAddress;
    let notMember: SignerWithAddress;
    let res: any;
    let dao: Contract;
    let MEMBERS: any;


    beforeEach(async() => {
        [owner, member1, member2, member3, member4, member5, member6, tribune, notMember] = await ethers.getSigners();
        MEMBERS = [member1, member2, member3, member4, member5, member6]

        const Dao = await ethers.getContractFactory("AssemblyDAO");
        dao = await Dao.deploy();

        // assign tribune role to "tribune"
        await dao.grantTribune(tribune.address)
    })

    describe("Init", async() => {
        it("should init", async() => {
            expect(dao).to.be.ok
        })
    })

    describe("addMember", async() => {
        context("when no members exist", async() => {
            it("should add member", async() => {
                expect(await dao.isMember(member1.address))
                    .to.be.false

                await dao.addMember(member1.address)

                expect(await dao.isMember(member1.address))
                    .to.be.true
            })

            it("should incremement totalMembers", async() => {
                expect(await dao.totalMembers())
                    .to.eq(0)

                await dao.addMember(member1.address)
                expect(await dao.totalMembers())
                    .to.eq(1)
            })

            it("should throw when non-tribune adds member", async() => {
                await expect(dao.connect(member2).addMember(member1.address))
                    .to.be.revertedWith("Tribune: caller does not have permission")
            })
        })

        context("when members exist", async() => {
            beforeEach(async() => {
                await dao.addMember(member1.address)
                await dao.addMember(member2.address)
            })

            it("should throw when member is added twice", async() => {
                await expect(dao.addMember(member1.address))
                    .to.be.revertedWith("AssemblyDAO: is already a member")
            })
        })
    })

    describe("removeMember", async() => {
        context("when members exist", async() => {
            beforeEach(async() => {
                await Promise.all([
                    dao.addMember(member1.address),
                    dao.addMember(member2.address)
                ])
            })

            it("should remove member as admin", async() => {
                await dao.removeMember(member1.address)
                expect(await dao.isMember(member1.address))
                    .to.be.false
            })

            it("should remove member as tribune", async() => {
                await dao.connect(tribune).removeMember(member1.address)
                expect(await dao.isMember(member1.address))
                    .to.be.false
            })

            it("should remove self as member", async() => {
                await dao.connect(member1).removeMember(member1.address)
                expect(await dao.isMember(member1.address))
                    .to.be.false
            })

            it("should throw when member to remove is not a member", async() => {
                await expect(dao.removeMember(notMember.address))
                    .to.be.revertedWith("AssemblyDAO: address is not a member")
            })

            it("should decrement totalMembers", async() => {
                expect(await dao.totalMembers())
                    .to.eq(2)

                await dao.removeMember(member1.address)
                expect(await dao.totalMembers())
                    .to.eq(1)
            })
        })

    })

    describe("createProposals", async() => {
        context("when members don't exist", async() => {
            it("should throw when non member creates a proposal", async() => {
                await expect(dao.connect(notMember).createProposal(...proposalArgs1))
                    .to.be.revertedWith("AssemblyDAO: caller is not a member")
            })

            it("should throw when tribune creates a proposal", async() => {
                await expect(dao.connect(tribune).createProposal(...proposalArgs1))
                    .to.be.revertedWith("AssemblyDAO: caller is not a member")
            })

            it("should throw when admin creates a proposal", async() => {
                await expect(dao.createProposal(...proposalArgs1))
                    .to.be.revertedWith("AssemblyDAO: caller is not a member")
            })
        })

        context("when members exist", async() => {
            beforeEach(async() => {
                await Promise.all([
                    dao.addMember(member1.address),
                    dao.addMember(member2.address)
                ])
            })

            it("should create a proposal", async() => {
                let initBlock = await ethers.provider.getBlockNumber()

                await dao.connect(member1).createProposal(...proposalArgs1)
                expect(await dao.totalProposals())
                    .to.eq(1)

                res = await dao.proposalInfo(1)
                expect(res.title).to.eq(proposalArgs1[0])
                expect(res.description).to.eq(proposalArgs1[1])
                expect(res.location).to.eq(proposalArgs1[2])
                expect(res.timeStart.toNumber())
                    .to.be.greaterThan(initBlock)
            })
        })
    })

    describe("castVote", async() => {
        context("when a proposal is created", async() => {
            beforeEach(async() => {
                for (let i = 0; i < MEMBERS.length; i++) {
                    await dao.addMember(MEMBERS[i].address)
                }
    
                await dao.connect(member1).createProposal(...proposalArgs1)
            })

            it("should record votes", async() => {
                for (let i = 0; i < MEMBERS.length; i++) {
                    await dao.connect(MEMBERS[i]).castVote(1, MEMBER_VOTES_YAY[i])
                }

                expect(await dao.getVoteCount(1, ABSTAIN))
                    .to.eq(1)
                expect(await dao.getVoteCount(1, YAY))
                    .to.eq(3)
                expect(await dao.getVoteCount(1, NAY))
                    .to.eq(2)
            })

            it("should throw when non member votes", async() => {
                await expect(dao.connect(notMember).castVote(1, YAY))
                    .to.be.revertedWith("AssemblyDAO: caller is not a member")
            })

            it("should throw when proposal does not exist", async() => {
                await expect(dao.connect(member1).castVote(NO_PROPOSAL, YAY))
                    .to.be.revertedWith("AssemblyDAO: proposal does not exist")
            })

            it("should throw when member already voted", async() => {
                await dao.connect(member1).castVote(1, YAY)
                await expect(dao.connect(member1).castVote(1, NAY))
                    .to.be.revertedWith("AssemblyDAO: member already voted")
            })
        })

        context("when all members vote", async() => {
            beforeEach(async() => {
                for (let i = 0; i < MEMBERS.length; i++) {
                    await dao.addMember(MEMBERS[i].address)
                }
    
                await dao.connect(member1).createProposal(...proposalArgs1)

                for (let i = 0; i < MEMBERS.length; i++) {
                    await dao.connect(MEMBERS[i]).castVote(1, MEMBER_VOTES_YAY[i])
                }
            })

            it("should track total votes", async() => {
                expect(await dao.totalVotes(1))
                    .to.eq(MEMBERS.length)
            })

            it("should track if member voted", async() => {
                expect(await dao.hasVoted(1, member1.address))
                    .to.be.true

                expect(await dao.hasVoted(1, owner.address))
                    .to.be.false
            })
        })

        context("when the voting period has ended", async() => {
            beforeEach(async() => {
                for (let i = 0; i < MEMBERS.length; i++) {
                    await dao.addMember(MEMBERS[i].address)
                }
    
                await dao.connect(member1).createProposal(...proposalArgs1)
                await time.increase(ONE_WEEK)
            })

            it("should throw when voting after voting period", async() => {
                await expect(dao.connect(member1).castVote(1, YAY))
                    .to.be.revertedWith("AssemblyDAO: voting period has ended")
            })
        })
    })

    describe("initAssembly", async() => {
        context("when a proposal is created", async() => {
            beforeEach(async() => {
                for (let i = 0; i < MEMBERS.length; i++) {
                    await dao.addMember(MEMBERS[i].address)
                }
    
                await dao.connect(member1).createProposal(...proposalArgs1)
            })

            context("when quorum is not reached", async() => {
                beforeEach(async() => {
                    await time.increase(ONE_WEEK)   
                })

                it("should throw when calling initAssembly", async() => {
                    await expect(dao.initAssembly(1))
                        .to.be.revertedWith("AssemblyDAO: quorum not reached")
                })
            })

            context("when quorum is reached with majority NAY", async() => {
                beforeEach(async() => {
                    for (let i = 0; i < MEMBERS.length; i++) {
                        await dao.connect(MEMBERS[i]).castVote(1, MEMBER_VOTES_NAY[i])
                    }
                    await time.increase(ONE_WEEK)   
                })

                it("should throw with losing majority", async() => {
                    await expect(dao.connect(tribune).initAssembly(1))
                        .to.be.revertedWith("AssemblyDAO: the majority voted NAY")
                })
            })

            context("when quorum is reach with majority YAY", async() => {
                beforeEach(async() => {
                    for (let i = 0; i < MEMBERS.length; i++) {
                        await dao.connect(MEMBERS[i]).castVote(1, MEMBER_VOTES_YAY[i])
                    }
                    await time.increase(ONE_WEEK)
                })

                it("should initialize the assembly", async() => {
                    await dao.connect(tribune).initAssembly(1)

                    res = await dao.assemblies(1)
                    expect(res.title).to.eq(proposalArgs1[0])
                    expect(res.description).to.eq(proposalArgs1[1])
                    expect(res.location).to.eq(proposalArgs1[2])
                    expect(res.assemblyNumber).to.eq(1)
                })

                it("should throw when initialized from non-tribune", async() => {
                    await expect(dao.connect(member1).initAssembly(1))
                        .to.be.revertedWith("Tribune: caller does not have permission")
                })
            })
        })

    })
});