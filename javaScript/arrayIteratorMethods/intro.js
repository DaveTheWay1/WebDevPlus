// * Intro

// *JavaScript Arrays have lots of helpful built-in methods.
// These methods enable us to write code following a modern functional 
// programming approach verses that of imperative programming.

// * Imperative Programming
// Imperative programming is a more step-by-step way of writing code.
// ex:
// for (let index = 0; index < array.length; index++) {
    // do stuff
// }
// With a for loop we’re saying:

// Initialize a looping variable
// Use the looping variable to access an element in the array
// Increment the looping variable
// If the looping variable is less than the length of the array, loop again

// * Functional/Declarative Programming
// In functional/declarative programming, we write code that describes what we want to do:
// array.forEach(function(val, idx) {
    // do stuff
// });

// * map(cb)
// purpose: Transform source array into a new array
// returns: New Array
// Callback Should: Return what goes in the new array
// Callback’s Args: (elem, idx)

// * filter(cb)
// Purpose: 
// Returns: New array
// Callback Should: Return truthy value if current elem is to be included in new array
// Callback’s Args: (elem, idx)

// * find(cb)
// purpose: Find a certain element
// returns: The “found” elem, otherwise undefined
// Callback Should: Return truthy when elem is “found”
// Callback's Args: (elem, idx)

// * findIndex(cb)
// Purpose: Find the index of a certain element
// Returns: The index of the first elem “found”, otherwise -1
// Callback should: Return truthy when elem is “found”
// Callback's Args: (elem, idx)

// * some(cb)
// Purpose: Check if at least one element matches a condition
// Returns: true or false
// Callback Should: Return truthy if elem is what you’re checking for
// Callback's Args: (elem, idx)

// * every(cb)
// Purpose: Check if every element matches a condition
// Returns: true or false
// Callback Should Return truthy if elem is what you’re checking for
// Callback's Args: (elem, idx)

// * reduce(cb, initAcc)
// Purpose: Reduce the array to a single value/object
// Returns: Final value of acc (accumulator) 
// Callback Should: Return the new value of acc for the next iteration
// Callback's Args: (acc, elem, idx)