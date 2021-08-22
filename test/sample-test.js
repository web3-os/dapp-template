const { expect } = require("chai");

describe("YourContract", function () {
  it("Should return the new greeting once it's changed", async function () {
    const YourContract = await ethers.getContractFactory("YourContract");
    const contract = await YourContract.deploy("Hello, world!");
    await contract.deployed();

    expect(await contract.greet()).to.equal("Hello, world!");

    const setGreetingTx = await contract.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await contract.greet()).to.equal("Hola, mundo!");
  });
});
