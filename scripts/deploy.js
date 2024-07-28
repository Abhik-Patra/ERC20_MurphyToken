async function main(){
    const [deployer]=await ethers.getSigners();

    const token= await ethers.deployContract("MurphyToken");
    console.log("Token Address:",await token.getAddress());

}

main()
.then(()=> ProcessingInstruction.exit(0))
.catch((error)=> {console.error(error); process.exit(1);} );