const {ethers} = require('ethers')
require('dotenv').config()

const artifact = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json')

const ADDRESS_GOERLI = '0xE8E7b6Be289723ecb9E03c7f97733964bD7e8592'
const PROVIDER_GOERLI = new ethers.providers.JsonRpcProvider(process.env.URL_GOERLI)

const contract = new ethers.Contract(
    ADDRESS_GOERLI,
    artifact.abi,
    PROVIDER_GOERLI
)

async function main() {
  const message = await contract.getName()
  console.log('The message is: ', message)
}

main()