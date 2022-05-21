// SPDX-License-Identifier: MIT
// Activate_Miami_Hackathon Agora-Square (contracts/Proposals.sol)

pragma solidity 0.8.11;

contract Proposals {

    struct Proposal {
        string title;
        string description;
        string location;
        uint256 timeStart;
    }

    // proposalId => Proposal
    mapping(uint256 => Proposal) public proposalInfo; 

    uint256 public totalProposals;

    function _createProposal(
        string memory _title,
        string memory _description,
        string memory _location
        ) internal {
            totalProposals++;
            Proposal memory newProposal = Proposal({
                title: _title,
                description: _description,
                location: _location,
                timeStart: block.timestamp
            });
            proposalInfo[totalProposals] = newProposal;
    }
}