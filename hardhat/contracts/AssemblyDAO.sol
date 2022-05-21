// SPDX-License-Identifier: MIT
// Activate_Miami_Hackathon Agora-Square (contracts/AssemblyDAO.sol)

pragma solidity 0.8.11;

import { Proposals } from "./Proposals.sol";
import { Tribune } from "./Tribune.sol";

contract AssemblyDAO is Proposals, Tribune {

    struct Assembly {
        string title;
        string description;
        string location;
        uint256 assemblyNumber;
    }

    enum VoteType { ABSTAIN, YAY, NAY }

    // assemblyId => Assembly
    mapping(uint256 => Assembly) assemblies;
    // address => isMember
    mapping(address => bool) public isMember;
    // proposalId => member => vote
    mapping(uint256 => mapping(VoteType => uint256)) castedVotes;
    // proposalId => address => hasVoted
    mapping(uint256 => mapping(address => bool)) hasVoted;
    // proposalId => totalVotes
    mapping(uint256 => uint256) totalVotes;

    uint256 public totalAssemblies;
    uint256 public totalMembers;
    uint256 public constant VOTING_PERIOD = 604800;
    uint256 public constant QUORUM = 5; // FIX ME

    modifier onlyMembers() {
        require(
            isMember[msg.sender],
            "AssemblyDAO: caller is not a member"
        );
        _;
    }

    function castVote(uint256 proposalId, VoteType vote) external onlyMembers() {
        Proposal memory proposal = proposalInfo[proposalId];
        require(
            proposalId <= totalProposals,
            "AssemblyDAO: proposal does not exist"
        );
        require(
            block.timestamp <= proposal.timeStart + VOTING_PERIOD,
            "AssemblyDAO: voting period has ended"
        );
        require(
            !hasVoted[proposalId][msg.sender],
            "AssemblyDAO: member already voted"
        );
        hasVoted[proposalId][msg.sender] = true;
        castedVotes[proposalId][vote]++;
        totalVotes[proposalId]++;
    }

    function addMember(address member) external onlyTribune() {
        require(!isMember[member], "AssemblyDAO: is already a member");
        totalMembers++;
        isMember[member] = true;
    }

    function removeMember(address member) external {
        require(
            isMember[member],
            "AssemblyDAO: address is not a member"
        );
        require(
            hasRole(DEFAULT_ADMIN_ROLE, msg.sender) || 
            hasRole(TRIBUNE_ROLE, msg.sender) || 
            msg.sender == member,
            "AssemblyDAO: only tribunes can remove other DAO members"
        );
        totalMembers--;
        isMember[member] = false;
    }

    function createProposal(
        string memory title,
        string memory description,
        string memory location
        ) external onlyMembers() {
        _createProposal(title, description, location);
    }

    function initAssembly(uint256 proposalId) external onlyTribune() {
        require(
            castedVotes[proposalId][VoteType.YAY] >=
                castedVotes[proposalId][VoteType.NAY],
            "AssemblyDAO: the majority voted NAY"
        );
        require(
            totalVotes[proposalId] >= QUORUM,
            "AssemblyDAO: quorum not reached"
        );
        Proposal memory p = proposalInfo[proposalId];
        Assembly memory newAssembly = Assembly({
            title: p.title,
            description: p.description,
            location: p.location,
            assemblyNumber: proposalId
        });
        totalAssemblies++;
        assemblies[totalAssemblies] = newAssembly;
    }

    function getVoteCount(uint256 proposalId, VoteType vote) external view returns(uint256){
        return castedVotes[proposalId][vote];
    }

}