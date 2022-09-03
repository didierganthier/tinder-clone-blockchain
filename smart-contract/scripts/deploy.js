const { ethers } = require("hardhat");

const main = async () => {
  const tinderFactory = await ethers.getContractFactory("TinderERC721");
  const tinderContract = await tinderFactory.deploy();

  console.log("Contract deployed to:", tinderContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  }
);
