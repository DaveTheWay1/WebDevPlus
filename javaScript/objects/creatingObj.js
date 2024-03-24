// ? Creating Objects

// * There are 3 different ways we can create objects
// By using Object Literal Notation (also called an Object Initializer)
// By invoking a Class (also known as a Constructor Function)
// By using the Object.create method


// ? Creating Objects using Object Literal Notation
// also known as an Object Initializer
const game = {};
console.log(typeof game);
// output: object
// * an object with no values is still an empty object.
// the stuff inside the object is referred to as //* properties.

// * Let’s update our code so that game has a property:
const game1 = {title: 'Guess the Number!'};
console.log(game1);

// * Stylistically, defining an object with a single 
// property or a couple of “short” properties on a 
// single line of code like…

let point = {x: 10, y: -5};

// * Properties are separated by commas:
const game2 = {
    title: 'Guess the Number!',
    // Add this second property
    biggestNum: 100
};

// * Syntactically, a trailing comma is permitted 
// after the last property:
const game3 = {
    title: 'Guess the Number!',
    biggestNum: 100,  // trailing comma
};

// ? Review Questions - Properties
const game4 = {
    title: 'Guess the Number!',
    biggestNum: 100,
};
// How many properties does game contain
// 2
// What are the keys (AKA property names)
// title, biggestNum
// What is the value of the title property?
// Guess the Number!
// What are the data types of the keys?
// strings