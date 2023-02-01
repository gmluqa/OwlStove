async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const OwlStove = await ethers.getContractFactory("OwlStove");
  const owlStove = await OwlStove.deploy();

  console.log("Contract address:", owlStove.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
