// * Selecting a Single Element by its id

// * The getElementById method is
// the most efficient way to select a DOM element if it has an 
// id assigned to it (using the id attribute).

// ? select the <h1> by its id and save the 
// ? reference to the DOM element in a variable named titleEl:

// main.js
const titleEl = document.getElementById('title');
console.log(titleEl);

// main.js
console.dir(titleEl);
// to explore the element’s JS object representation