import { ethers } from "hardhat";

async function main() {
  const marketFactory = await ethers.getContractFactory("Market");

  // If we had constructor arguments, they would be passed into deploy()
  let marketFactoryContract = await marketFactory.deploy(
    "0xa0afaa285ce85974c3c881256cb7f225e3a1178a", // WCRES
    "0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099"); // CELL

  // The address the Contract WILL have once mined
  console.log(marketFactoryContract.address);

  // The transaction that was sent to the network to deploy the Contract
  console.log(marketFactoryContract.deployTransaction.hash);

  // The contract is NOT deployed yet; we must wait until it is mined
  await marketFactoryContract.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
