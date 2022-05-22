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

    event CreateProposal(string indexed title, uint256 indexed timeStart, uint256 indexed proposalId);

    /// @notice internal function to create a DAO proposal for an assembly
    /// @param _title the assembly's proposed title
    /// @param _description the assembly's proposed description
    /// @param _location open-ended location. Could be physical but will probably
    ///                  be a video stream address
    function _createProposal(
        string memory _title,
        string memory _description,
        string memory _location
        ) internal {
            totalProposals++;
            uint256 start = block.timestamp;
            Proposal memory newProposal = Proposal({
                title: _title,
                description: _description,
                location: _location,
                timeStart: start
            });
            proposalInfo[totalProposals] = newProposal;
            emit CreateProposal(_title, start, totalProposals);
    }
}
