// * Function (local) Scope

// * A new function scope is created for each executing function.

// * Each variable and function defined within the function 
// would be included within that function’s scope.

// Note: The Further Study section discusses how let and const variables 
// may have a more limited “block” scope if not defined in the top-level 
// of the function.

function initialize() {
    const playerName = getPlayerName();
    size = getBoardSize();
    board = generateBoard(size, playerName);
    renderBoard();
}
// ? What variables/functions live within the scope of the initialize function?
// playerName

// * A major benefit of having different scopes is being able to use 
// the same names for variables in different functions! 
// If there were only one scope, this wouldn’t be possible.