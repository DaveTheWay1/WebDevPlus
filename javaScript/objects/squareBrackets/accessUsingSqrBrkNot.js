// * Accessing Properties with Square Bracket Notation

// * The other way to access, add, update and delete properties 
// is by using square bracket notation.

// * We need to use square bracket notation instead of dot notation 
// when at the time you’re writing the code, you don’t know which 
// property needs to be accessed.

let myBox = {
    apple: "red",
    banana: "yellow",
    "box with space": "purple"
};

let key = "banana";
console.log(myBox[key]); 
// Output: "yellow"

key = "box with space";
console.log(myBox[key]); 
  // Output: "purple"

console.log(myBox["box with space"]);

// * square brackets are used to access values through variables that store keys
// * square brackets are also used to access values with keys that are strings
// keys are always strings but like in the example above "box with space"...
// if we did not add those quotes it'd throw an error. 
// additinally, strings that start with letters and include numbers and vice versa

console.log(myBox.key);
// undefined.
// * undefined BC for dot notation to work it needs the exact keys in the object.. not references.
// hence why square brackets are valuable