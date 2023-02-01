const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { ethers } = require("hardhat");
const { expect } = require("chai");

// run npx hardhat test to run all the tests
// https://hardhat.org/tutorial/testing-contracts

describe("OwlStove contract", function () {
  async function deployOwlStoveFixture() {
    const OwlStove = await ethers.getContractFactory("OwlStove");
    const [owner, addr1] = await ethers.getSigners();

    const OwlStoveNft = await OwlStove.deploy();

    await OwlStoveNft.deployed();

    return {
      OwlStove,
      OwlStoveNft,
      owner,
      addr1,
    };
  }
  it("Only allows 1 NFT to be minted per address", async function () {
    const { OwlStoveNft, addr1 } = await loadFixture(deployOwlStoveFixture);

    // addr1 mints an NFT
    await OwlStoveNft.connect(addr1).safeMint();
    // addr1 tries to mint an additional NFT
    await expect(OwlStoveNft.connect(addr1).safeMint()).to.be.revertedWith(
      "You already own an owl OwO"
    );
    expect(await OwlStoveNft.balanceOf(addr1.address)).to.equal(1);
  });
  it("Only allows 33 tokens to be minted", async function () {
    const { OwlStoveNft, owner, addr1 } = await loadFixture(
      deployOwlStoveFixture
    );

    // owner mints 1
    await OwlStoveNft.connect(owner).safeMint();

    // 32 randoms mint
    for (let i = 0; i < 32; i++) {
      // new wallet
      let newWallet = ethers.Wallet.createRandom();
      // connect provider
      newWallet = newWallet.connect(ethers.provider);
      await owner.sendTransaction({
        to: newWallet.address,
        value: ethers.utils.parseEther("1"),
      });
      await OwlStoveNft.connect(newWallet).safeMint();
    }

    // Person tries to mint a new owl, should fail with mint has concluded
    await expect(OwlStoveNft.connect(addr1).safeMint()).to.be.revertedWith(
      "The mint has concluded, all 33 Owls are out of the stove, stay tuned for upcoming drops"
    );
  });
});
