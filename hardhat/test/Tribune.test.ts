import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Tribune", () => {
    
    let owner: SignerWithAddress;
    let alice: SignerWithAddress;
    let bob: SignerWithAddress;
    let carol: SignerWithAddress;
    let dave: SignerWithAddress;
    let eve: SignerWithAddress;
    let frank: SignerWithAddress;
    let MEMBERS: any;

    let TRIBUNE_ROLE: string;
    let tribune: Contract;


    beforeEach(async() => {
        [owner, alice, bob, carol, dave, eve, frank] = await ethers.getSigners();
        MEMBERS = [alice, bob, carol, dave, eve, frank]

        const Tribune = await ethers.getContractFactory("Tribune");
        tribune = await Tribune.deploy();

        TRIBUNE_ROLE = await tribune.TRIBUNE_ROLE()
    })

    describe("Init", async() => {
        context("starting from zero", async() => {

            it("should init", async() => {
                expect(tribune).to.be.ok
            })

            it("should set owner as admin", async() => {
                let admin = await tribune.DEFAULT_ADMIN_ROLE() 
                expect(await tribune.hasRole(admin, owner.address))
                    .to.be.true
            })

            it("should grant tribune role as admin", async() => {
                expect(await tribune.hasRole(TRIBUNE_ROLE, alice.address))
                    .to.be.false

                await tribune.grantTribune(alice.address)

                expect(await tribune.hasRole(TRIBUNE_ROLE, alice.address))
                    .to.be.true
                })
            })

            it("should throw when non-tribune grants tribune", async() => {
                expect(await tribune.hasRole(TRIBUNE_ROLE, alice.address))
                    .to.be.false

                await expect(tribune.connect(alice).grantTribune(alice.address))
                    .to.be.revertedWith("Tribune: caller does not have permission")
            })

            it("should increment/decrement totalTribunes", async() => {
                expect(await tribune.totalTribunes())
                    .to.eq(0)

                await tribune.grantTribune(alice.address)
                expect(await tribune.totalTribunes())
                    .to.eq(1)

                await tribune.revokeTribune(alice.address)
                expect(await tribune.totalTribunes())
                    .to.eq(0)    
            })

        context("when tribune is set", async() => {
            beforeEach(async() => {
                await tribune.grantTribune(alice.address)
            })

            it("should set tribune from another tribune", async() => {
                expect(await tribune.hasRole(TRIBUNE_ROLE, bob.address))
                    .to.be.false

                await tribune.connect(alice).grantTribune(bob.address)

                expect(await tribune.hasRole(TRIBUNE_ROLE, bob.address))
                    .to.be.true
            })

            it("should revoke tribune from another tribune", async() => {
                await tribune.connect(alice).grantTribune(bob.address)

                expect(await tribune.hasRole(TRIBUNE_ROLE, bob.address))
                    .to.be.true

                await tribune.connect(bob).revokeTribune(alice.address)

                expect(await tribune.hasRole(TRIBUNE_ROLE, alice.address))
                    .to.be.false
            })

            it("should revoke tribune from admin", async() => {
                await tribune.revokeTribune(alice.address)

                expect(await tribune.hasRole(TRIBUNE_ROLE, alice.address))
                    .to.be.false
            })

            it("should revoke tribune from self", async() => {
                await tribune.connect(alice).revokeTribune(alice.address)

                expect(await tribune.hasRole(TRIBUNE_ROLE, alice.address))
                    .to.be.false
            })
        })

        context("when max tribunes are set", async() => {
            beforeEach(async() => {
                for (let i = 0; i < MEMBERS.length - 1; i++) {
                    await tribune.grantTribune(MEMBERS[i].address)
                }
            })

            it("should revert exceeding max tribunes", async() => {
                await expect(tribune.grantTribune(frank.address))
                    .to.be.revertedWith("Tribune: cannot be more than 5 tribunes")
            })
            
        })

    })  
});
