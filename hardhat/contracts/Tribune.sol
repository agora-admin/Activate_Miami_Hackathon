// SPDX-License-Identifier: MIT
// Activate_Miami_Hackathon Agora-Square (contracts/Tribune.sol)

pragma solidity 0.8.11;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract Tribune is AccessControl {
    bytes32 public constant TRIBUNE_ROLE = keccak256("TRIBUNE_ROLE");

    uint256 public totalTribunes;
    uint256 public constant TRIBUNE_MAX = 4;

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// @notice for now, the default admin also has access
    modifier onlyTribune() {
        require(
            hasRole(TRIBUNE_ROLE, msg.sender) ||
            hasRole(DEFAULT_ADMIN_ROLE, msg.sender)            
            ,
            "Tribune: caller does not have permission"
        );
        _;
    }

    /// @notice grants tribune role to user
    /// @param user to whom the role is being granted 
    function grantTribune(address user) public onlyTribune() {
        require(
            totalTribunes <= TRIBUNE_MAX,
            "Tribune: cannot be more than 5 tribunes"
        );
        _grantRole(TRIBUNE_ROLE, user);
        totalTribunes++;
    }

    /// @notice revokes tribune role from user
    /// @param user to whom the role is being revoked 
    function revokeTribune(address user) public onlyTribune() {
        _revokeRole(TRIBUNE_ROLE, user);
        totalTribunes--;
    }
}
