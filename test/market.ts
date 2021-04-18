import { ethers } from "hardhat";
import { Market } from "../typechain/Market"
import { Market__factory } from "../typechain/factories/Market__factory"
import { Token } from "../typechain/Token"
import { Token__factory } from "../typechain/factories/Token__factory"

describe("Market", () => {
    let deployer
    let marketFactory
    let tokenFactory
    let market : Market
    let apple : Token
    let banana : Token

    it ("deploys", async () => {
        [ deployer ] = await ethers.getSigners()
        marketFactory = new Market__factory(deployer)
        tokenFactory = new Token__factory(deployer)

        apple = await tokenFactory.deploy()
        banana = await tokenFactory.deploy()

        market = await marketFactory.deploy(apple.address, banana.address)
    })
})