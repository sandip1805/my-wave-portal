// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    mapping(address => uint) public totalWavesBySender;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves += 1;
        totalWavesBySender[msg.sender] += 1;
        console.log("%s has waved!", msg.sender);
        console.log("%s has waved %s times!", msg.sender, totalWavesBySender[msg.sender]);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}