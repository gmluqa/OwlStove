const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

// run npx hardhat test to run all the tests
// https://hardhat.org/tutorial/testing-contracts

describe("OwlStove contract", function () {
  async function deployOwlStoveFixture() {
    const OwlStove = await ethers.getContractFactory("OwlStove");
    const addresses = Array.from({ length: 32 }, (_, i) => `addr${i + 1}`);
    const [
      owner,
      addr1,
      addr2,
      addr3,
      addr4,
      addr5,
      addr6,
      addr7,
      addr8,
      addr9,
      addr10,
      addr11,
      addr12,
      addr13,
      addr14,
      addr15,
      addr16,
      addr17,
      addr18,
      addr19,
      addr20,
      addr21,
      addr22,
      addr23,
      addr24,
      addr25,
      addr26,
      addr27,
      addr28,
      addr29,
      addr30,
      addr31,
      addr32,
    ] = await ethers.getSigners();

    const OwlStoveNft = await OwlStove.deploy();

    await OwlStoveNft.deployed();

    return {
      OwlStove,
      OwlStoveNft,
      owner,
      addr1,
      addr2,
      addr3,
      addr4,
      addr5,
      addr6,
      addr7,
      addr8,
      addr9,
      addr10,
      addr11,
      addr12,
      addr13,
      addr14,
      addr15,
      addr16,
      addr17,
      addr18,
      addr19,
      addr20,
      addr21,
      addr22,
      addr23,
      addr24,
      addr25,
      addr26,
      addr27,
      addr28,
      addr29,
      addr30,
      addr31,
      addr32,
    };
  }
  it("Only allows 1 NFT to be minted per address", async function () {
    const { OwlStoveNft, addr1 } = await loadFixture(deployOwlStoveFixture);
  });
  it("Only allows 33 tokens to be minted", async function () {
    const { OwlStoveNft } = await loadFixture(deployOwlStoveFixture);
  });
});
