const hre = require("hardhat");

async function main() {
  const [deployer, randomAddress, ...rest] = await ethers.getSigners();
  const YourContract = await hre.ethers.getContractFactory("YourContract");
  const contract = await YourContract.deploy("Hello, Hardhat!");

  await contract.deployed();
  console.log("YourContract deployed to:", contract.address);
  console.log("YourContract deployed by:", deployer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
