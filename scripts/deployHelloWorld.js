const {ethers} = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners()
    // Grab the contract factory
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    // Start deployment, returning a promise that resolves to a contract object
    const helloWorld = await HelloWorld.deploy(); // Instance of the contract
    console.log("Contract deployed to address:", helloWorld.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});