pragma solidity 0.8.11;

import "./MiamiAssemblyCoin.sol";

contract POAP is MiamiAssemblyCoin {
    constructor() public {
        _mint(msg.sender, 0, 1000000, "POAP");
    }

    function batchMintToAttendees(uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(msg.sender, ids, amounts, data);
    }
 }
}
