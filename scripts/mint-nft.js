require('dotenv').config();
const ethers = require('ethers');

const tokenIpfsCids = {
  1: 'QmZ8Syn28bEhZJKYeZCxUTM5Ut74ccKKDbQCqk5AuYsEnp',
  2: 'QmZVpSsjvxev3C8Dv4E44fSp8gGMP6aoLMp56HmZi5Wkxh',
  3: 'QmZMo8JDB9isA7k7tr8sFLXYwNJNa51XjJinkLWcc9vnta',
  4: 'QmV7fqfJBozrc7VtaHSd64GvwNYqoQE1QptaysenTJrbpL',
  5: 'QmSK1Zr6u2f2b8VgaFgz9CY1NR3JEyygQPQjJZaAA496Bh',
  6: 'QmafTK2uFRuLyir2zJpLSBMercq2nDfxtSiMWXL1dbqTDn',
  7: 'QmXTMYJ3rKeTCaQ79QQPe2EYcpVFbHr3maqJCPGcUobS4B',
  8: 'QmQa97BYq9se73AztVF4xG52fGSBVB1kZKtAtuhYLHE1NA',
}

// Get Alchemy API Key
const API_KEY = process.env.KEY_ALCHEMY_GOERLI;

// Get the NFT Metadata IPFS URL
const TOKEN_URI = "https://ipfs.unique.network/ipfs/" + tokenIpfsCids["2"]

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY)

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

// Create a signer
const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider)

// Get contract ABI and address
const abi = contract.abi
const contractAddress = '0xB07956E26FDF1b215aC89AE21F822F8AB9Be9A27'

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer)

// Call mintNFT function
const mintNFT = async () => {
  let nftTxn = await myNftContract.mintNFT(signer.address, TOKEN_URI)
  await nftTxn.wait()
  console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
}

mintNFT()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });