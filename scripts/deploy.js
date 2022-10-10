async function main() {
  //Box is main base contract 
  const Box = await ethers.getContractFactory("Box")
  console.log("Deploying Box, ProxyAdmin, and then Proxy...")
  //proxy is Proxy contract(delegate or router ) contact 
  const proxy = await upgrades.deployProxy(Box, [42], { initializer: 'store' })
  console.log("Proxy of Box deployed to:", proxy.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error)
      process.exit(1)
  })