import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { proposalArgs1 } from "./utils";

describe("Proposals", () => {
    
    let alice: SignerWithAddress;
    let bob: SignerWithAddress;
    let res: any;
    let proposals: Contract;


    beforeEach(async() => {
        [alice, bob] = await ethers.getSigners();
        const Proposals = await ethers.getContractFactory("$Proposals");
        proposals = await Proposals.deploy();
    })

    describe("Init", async() => {
        it("should init", async() => {
            expect(proposals).to.be.ok
        })
    })

    describe("setProposal", async() => {
        context("starting from zero", async() => {
            it("should increment total proposals", async() => {
                await proposals.$_createProposal(...proposalArgs1)

                expect(await proposals.totalProposals())
                    .to.eq(1)

                await proposals.$_createProposal(...proposalArgs1)

                expect(await proposals.totalProposals())
                    .to.eq(2)
            })

            it("should set the correct values", async() => {
                let initBlock = await ethers.provider.getBlockNumber()
                
                await proposals.$_createProposal(...proposalArgs1)
                res = await proposals.proposalInfo(1)

                expect(res.title).to.eq(proposalArgs1[0])
                expect(res.description).to.eq(proposalArgs1[1])
                expect(res.location).to.eq(proposalArgs1[2])
                expect(res.timeStart.toNumber())
                    .to.be.greaterThan(initBlock)                        
            })
        })
    })

  
});