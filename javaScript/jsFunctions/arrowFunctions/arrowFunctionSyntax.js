// * Arrow Functions

// regular function
let squares = [1, 2, 3].map(function (x) { return x * x });
// arrow function
let squares1 = [1, 2, 3].map(x => x * x);

// * A single parameter need not be wrapped in parens:
// one parameter
// x => { ... }
// no parameters 
// () => { ... } 
// two or more parameters 
// (x, y) => { ... }

// * However, even though we can skip wrapping a single 
// * parameter with parens, many style guides recommend using them anyway:
// one parameter
// (x) => { ... } 

// * The statement block of an arrow function behaves just like that of a regular function:
const getGrade = (score) => {
    if (score === 100) return 'A+';
    score = Math.floor(score / 10);
    return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A'][score];
};

// * If there’s only a single expression (not a statement), curly braces are optional:
const logThis = () => { console.log(this) };
const logThis1 = () => console.log(this);

// * Arrow functions will implicitly return the result of an expression without a block (braces):
const add = (x, y) => { return x + y };

// * Ideal single-statement arrow function
const add1 = (x, y) => x + y;

// * Returns undefined (blocks are like reg functions)
// const add2 = (x, y) => { x + y };

// * Syntax error, must be an expression
// const add3 = (x, y) => return x + y;

// * To implicitly return a JS object, wrap it in parens to avoid the curly braces of 
// * the object being interpreted as a statement block:
let todos = ['Buy milk', 'Mow lawn'];

// * Below line of code won't work - looks like a statement block
// let todoObjects = todos.map(todo => {todo: todo, done: false});

// * Wrap the implicit returned object in parens
let todoObjects = todos.map((todo) => ({todo: todo, done: false}));
console.log(todoObjects)
// * without the parenthesis it would need the "return" but with the parenthesis the "return" is not needed
// output:
// [
//     { todo: 'Buy milk', done: false },
//     { todo: 'Mow lawn', done: false }
// ]

// * All arrow functions are expressions. There’s no such thing as an arrow function definition/declaration.
// Nope, syntax error (no declarations for arrow functions)
// add(x, y) => x + y;

// * This is what you want - a function expression
const add2 = (x, y) => x + y;

// * Arrow functions do not have an arguments “array-like” object:
function checkArgs() { console.log(arguments); }
checkArgs(1, 'abc') // outputs [1, "abc"]

const checkArgs = () => console.log(arguments);
checkArgs(1, 'abc') // outputs Uncaught ReferenceError: arguments is not defined