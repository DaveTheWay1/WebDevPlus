// * Global Scope

// * There’s only a single global scope.

// * If a variable is declared outside of a function, 
// it will “live” in global scope.

// main.js

let size, board;

function initialize() {
    size = getBoardSize();
    board = generateBoard(size);
    renderBoard();
}

// ? What variables/functions above exist in the global scope?
// * size and board

// * It is generally bad practice for our programs to create 
// variables in the global scope. Doing so risks us overwriting 
// data in use by JS libraries/frameworks or other routines.

// * Creating lots of global variables is referred to as 
// “polluting the global scope”, and we all know that it’s 
// not nice to pollute!

// * Although using both var and let in the global scope 
// results in a global variable being created, interestingly, 
// those created using let and const do not create properties 
// on the window object like var does.