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
    mapping(uint256 => Assembly) public assemblies;
    // address => isMember
    mapping(address => bool) public isMember;
    // proposalId => member => vote
    mapping(uint256 => mapping(VoteType => uint256)) castedVotes;
    // proposalId => address => hasVoted
    mapping(uint256 => mapping(address => bool)) public hasVoted;
    // proposalId => totalVotes
    mapping(uint256 => uint256) public totalVotes;

    uint256 public totalAssemblies;
    uint256 public totalMembers;
    uint256 public constant VOTING_PERIOD = 604800;
    uint256 public constant QUORUM = 5; // tmp

    event AddMember(address indexed newMember, uint256 indexed totalMembers);
    event RemoveMember(address indexed member, address indexed remover, uint256 totalMembers);
    event Vote(uint256 indexed proposalId, VoteType indexed vote);
    event InitAssembly(
        uint256 indexed proposalId,
        uint256 indexed assemblyId,
        string indexed title
    );

    /// @notice modifier that allows access only to members of the DAO
    modifier onlyMembers() {
        require(
            isMember[msg.sender],
            "AssemblyDAO: caller is not a member"
        );
        _;
    }

    /// @notice casts a vote for a proposal identifier. Only DAO members can vote
    ///         and voting must take place before the proposal's startTime + one week
    /// @param proposalId the proposal identifer
    /// @param vote is an enumerator and values can only be ABSTAIN, YAY, or NAY
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

    /// @notice adds member to the DAO. Can only be called by the tribune
    /// @param member is the member-to-be of the DAO
    function addMember(address member) external onlyTribune() {
        require(!isMember[member], "AssemblyDAO: is already a member");
        totalMembers++;
        isMember[member] = true;
        emit AddMember(member, totalMembers);
    }

    /// @notice removes member from the DAO. Can only be called by either the tribune
    ///         or the member themself
    /// @param member is the member-to-be-removed of the DAO
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
        emit RemoveMember(member, msg.sender, totalMembers);
    }

    /// @notice creates an assembly proposal. This can only be called by DAO members.
    /// @param title the assembly's proposed title
    /// @param description the assembly's proposed description
    /// @param location open-ended location. Could be physical but will probably
    ///                  be a video stream address
    function createProposal(
        string memory title,
        string memory description,
        string memory location
        ) external onlyMembers() {
        _createProposal(title, description, location);
    }

    /// @notice initializes the assembly and can only be called by a tribune if and only id
    ///         both the quorum is reached and has a majority of YAY votes
    /// @param proposalId proposal identifier
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
        totalAssemblies++;
        Proposal memory p = proposalInfo[proposalId];
        Assembly memory newAssembly = Assembly({
            title: p.title,
            description: p.description,
            location: p.location,
            assemblyNumber: totalAssemblies
        });
        assemblies[totalAssemblies] = newAssembly;
        emit InitAssembly(proposalId, totalAssemblies, p.title);
    }

    /// @notice returns the amount of votes for specificed VoteType per proposalId
    /// @dev in future iterations, mappings should not be public and should have explicit 
    ///      getters like this
    /// @param proposalId proposal identifier
    /// @param vote is an enumerator and values can only be ABSTAIN, YAY, or NAY
    function getVoteCount(uint256 proposalId, VoteType vote) external view returns(uint256){
        return castedVotes[proposalId][vote];
    }

}