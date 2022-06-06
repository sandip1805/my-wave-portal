const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
  
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);
  
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
  
    // #1
    let waveTxn = await waveContract.wave("My Personal Message to eth!");
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();

    // #2
    waveTxn = await waveContract.wave("This is my second wave to you!");
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();

    // new random person wave
    waveTxn = await waveContract.connect(randomPerson).wave("Wave from Random person!");
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();