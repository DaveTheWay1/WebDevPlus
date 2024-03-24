// * Adding Properties to an Existing Object Using Dot Notation

// * There are 2 different syntaxes available to access, add or modify an object’s properties
// Dot notation, and
// Square Bracket notation

const game = {
    title: 'Guess the number!'
}


// * use dot notation to add another property to the game object
game.smallestNum = 0;
console.log(game);
// { title: 'Guess the number!', smallestNum: 0 }

// ? Practice Adding/Updating Properties
// * Using dot notation on the game object, write two lines of code to
// * Add a property with a key of numGuesses set to a value of 0.
game.numGuesses = 0;
// * Update the smallestNum property’s value to be 1
game.smallestNum = 1;
console.log(game);
// { title: 'Guess the number!', smallestNum: 1, numGuesses: 0 }