// * Defining Functions

// * There are three primary ways to define functions in JS:
// Function Declaration/Definitions
// Function Expressions
// Arrow Functions

// * Function Declaration (AKA Function Definitions)
function sayHello(name) {
    console.log('Hello ' + name + '!');
}

// * Function Expression
const sayHello = function(name) {
    console.log('Hello ' + name + '!');
};
// ? What similarities and/or differences do you see between the two approaches above?
// They are very similar, but note how the function expression obtains its name 
// from the variable it's assigned to (plus, it's followed by a semicolon). 
// However, there is one key usage difference 

// * the difference between them is that function expressions cannot be invoked 
// before they are defined; whereas function declarations are internally 
// “hoisted” to the top of their scope and can therefore be invoked even 
// if they are defined later in the source code.

fnDeclaration();  // thank you function declarations :)
fnExpression();  // TypeError: fnExpression is not a function

function fnDeclaration() {
    console.log("I'm coming from a function declaration");
}

const fnExpression = function() {
    console.log("I'm coming from a function expression");
};
// Note: Attempting to execute a function expression before 
// it’s been assigned to its variable is the source of many an error for JS developers!

// * Arrow Functions

// * Function Declaration
function add(a, b) {
    return a + b;
}
// * and the following arrow function are equivalent:

// * Arrow Function
const add = (a, b) => a + b;

// As you can see, Arrow Functions are more concise and can implicitly (automatically) 
// return an expression. However, they can’t always be used in place 
// of non-Arrow functions due to the way they set the value of the this keyword 

// * Calling Functions
// Regardless of which of the three approaches are used to define functions, 
// we call them the same way:

add(25, 100);
// returns 25

// Developer Vocabulary: Developers might say call, execute, invoke or run…a function. 
// In the context of functions, they are synonyms!

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const planetHasWater = function(planet){
    planet = planet.toLowerCase();
    // * the above is necessary bc javascript does not perform case insentive by default.
    // * even if we used == like attempted.
    if (planet == 'earth' || planet == 'mars'){
        return true
    } else {
        return false
    }
}
console.log(planetHasWater('Jupiter'));
console.log(planetHasWater('EArth'));
console.log(planetHasWater('MArs'));
// output:
// false
// true
// true