// * Creating Objects
const prompt = require('prompt-sync')();
// By using Object Literal Notation (also called an Object Initializer)
// By invoking a Class (also known as a Constructor Function)
// By using the Object.create method

// ? create our first object

const game = {};
console.log(typeof game);
// output: object
// * an object with no values is still an empty object.
// the stuff inside the object is referred to as //* properties.

// * properties
// made of key and value pairs

const game1 = {
    title: 'Guess the number',
    biggestNum: 100,
}
//  the keys are strings
// * ADDING TO OBJECTS

// * different way to add properties

game1.smallestNum = 0
console.log(game1);
// * { title: 'Guess the number', biggestNum: 100, smallestNum: 0 }

// * UPDATING OBJECTS 

// * Add a property with a key of numGuesses set to a value of 0.
game1.numGuesses = 0;
// * Update the smallestNum property’s value to be 1
game1.smallestNum = 1
console.log(game1);

// output:
// {
//     title: 'Guess the number',
//     biggestNum: 100,
//     smallestNum: 1,
//     numGuesses: 0
// }

// * DIFFERENT WAY TO ACCESS 
console.log(game1['title']);
// output: Guess the number
const keyName = 'title'
console.log(game[keyName]);

game['guesses'] = [50,75,90,91];
console.log(game);

// * arrays are essentially objects

const myArray = [1,2,3,4,5];
console.log(myArray['0']);
// output: 1

const indexValue = 0;

// Computer Property Name Syntax
console.log(myArray[indexValue]);
// output: 1

// accessing an key that doesnt exist.

console.log(game.numWins)
// output: undefined

const words = {
    animals: ['fox', 'zebra', 'bear', 'turkey'],
    colors: ['purple', 'orange', 'green'],
};

let selectedCategory = 'animals';

const wordList1 = words[selectedCategory];
// wordList1 -> [ 'fox', 'zebra', 'bear', 'turkey' ]
const wordList2 = words.selectedCategory;
// wordList2 -> undefined
// ! dot notation doesnt seem to work only the square brackets

const catalog = {
    // when you have like below starting with numbers and then switching to letters you have to apply strings.
    '12347gt': 12.99,
    '45612hy': 3.99,
    '98723nu': 6.99
};

delete catalog['98723nu'];
console.log(catalog);

// we initialized a variable representing a given sku
let sku;
// using a while statement to prompt the user
// until they no longer want to get prices
// from the catalog
while(sku !== "quit"){
    prompt("Enter SKU or 'quit' to exist: ");
    // check if the user entered quit and exit the loop
    if(sku === "quit") break;
    // * to make sure the sku exists in catalog we use sku
    if (sku in catalog){
        // create a variable to store the looked up price
        let price = catalog[sku];
        console.log(`The price of ${sku} is ${price}`);
    } else{
        console.log('Invalid SKU, please try again.')
    }
}

// ** deleting a value in an object
const geniuses = {
    Einstein: true,
    'Mr Bean': false,
    Newton: true,
    Snooki: true
};

  // see ya!
delete geniuses['Mr Bean'];
console.log(geniuses);
// output: { Einstein: true, Newton: true, Snooki: true }

const person = {
    name: 'lisa',
    occupation: 'engineer',
    location: 'los angeles',
    age:32
};

delete person.age;
delete person.location;
console.log(person);

// * iterating through an object using a for loop
for (let key in person) {
    console.log(`The value of the ${key} property is ${person[key]}`);
}
// output: The value of the name property is lisa
// The value of the occupation property is engineer

// functions can also be in properties.
const person1 = {
    name: 'lisa',
    occupation: 'engineer',
    location: 'los angeles',
    age:32,
    greeting: function(){ //when a property is not a single value but an action it is called a method
        console.log("Hello, my name is, " + this.name);
    },
    walk: function(){
        console.log("walking...");
    }
};

const person2 = {
    name:"Alice",
    greet () {
        console.log(`Hello, my name is ${person2.name}!`);
    }
};

person2.greet();
// Hello, my name is Alice!

const game1 = {
    title: 'Guess the number',
    biggestNum: 100,
    play: function (){
        // create a secret number that users need to guess.
        // we will need to generate the secret number by usering Math.random()
        // take the resulting number and assign it to a new property called secretNum
        const rndNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1) + this.smallestNum);
        this.secretNum = rndNum;
    }
}

const person5 = {
    name: 'lisa',
    occupation: 'engineer',
    location: 'los angeles',
    age:32
};
// * the below creates a reference and not a copy.
const personReference = person5;
console.log(personReference === person5);
// output: true
personReference.name = 'David';
console.log(person5.name);
// output: 5
// this works bc it is a reference