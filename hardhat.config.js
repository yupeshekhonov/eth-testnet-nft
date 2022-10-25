//require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config();
let secret = require('./secret.json')

const { URL_ALCHEMY_GOERLI, PRIVATE_KEY } = process.env;

module.exports = {
    solidity: "0.8.4",
    networks: {
        hardhat: {},
        ropsten: {
            url: process.env.URL_ROPSTEN,
            accounts: [process.env.PRIVATE_KEY]
        },
        goerli: {
            url: URL_ALCHEMY_GOERLI,
            accounts: [`0x${PRIVATE_KEY}`]
        }
        /*works but probably not as expected goerli: {
            url: process.env.URL_GOERLI,
            accounts: [process.env.PRIVATE_KEY]
        }*/
    }
    /*
    etherscan: {
        apiKey: secret.poligonscan
        // process.env.POLYGONSCAN_KEY,
    }*/
};