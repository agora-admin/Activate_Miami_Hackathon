import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners()
    console.log(`Deploying contracts with ${deployer.address}`);

    const AssemblyDAO = await ethers.getContractFactory("AssemblyDAO")
    const dao = await AssemblyDAO.deploy()
    console.log(`AssemblyDAO address: ${dao.address}`)
}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error)
        process.exit(1)
    })