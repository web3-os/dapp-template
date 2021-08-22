require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: '0.8.3',
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    /*
      To set up a config for another network:
      
      1. Update your .env file with your API keys.
      2. Uncomment the code below for the network you want to deploy to.
    */

    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_RINKEBY_INFURA_API_KEY}`,
    //   accounts: [process.env.REACT_APP_RINKEBY_INFURA_PRIVATE_KEY],
    // },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${process.env.REACT_APP_MAINNET_INFURA_API_KEY}`,
    //   accounts: [process.env.REACT_APP_MAINNET_INFURA_PRIVATE_KEY],
    // },
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default to take the first account as deployer
    },
  },
};
