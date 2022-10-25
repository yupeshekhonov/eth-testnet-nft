pragma solidity ^0.8.4;

contract HelloWorld {
    string public name = "Hello World Contract";
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function getName() external view returns (string memory) {
        return name;
    }
}