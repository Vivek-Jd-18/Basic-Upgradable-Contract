async function main() {

    const TransparentUpgradeableProxy = "0x87b2f68670735e0657F4374B1B9f448D48735C07";
    // "TransparentUpgradeableProxy" this address you'll find at your test scan the last 
    //deployed contract address named "TransparentUpgradeableProxy"   
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    let box = await upgrades.upgradeProxy(TransparentUpgradeableProxy, BoxV2)
    console.log("Your upgraded proxy is done!", box.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })