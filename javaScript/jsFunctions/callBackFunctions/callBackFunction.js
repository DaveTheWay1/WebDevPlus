// * Callback Functions

// ? What’s a Callback Function?
// A callback function, is a function that’s passed to another function as an argument.

function higherOrderFunction(callbackFunction) {
    // Sooner or later...
    callbackFunction();
}

// * higher-order function
// A function that accepts a function as input and/or returns a function 

// * an example of a callback function that we have actually been using is array forEach method
colors.forEach(function(color, idx) {
    // ...
});

// * Although using anonymous functions as callbacks is convenient, 
// * it’s not uncommon to use a named function for code organization, for example:

document.getElementById('todo-container')
.addEventListener('click', handleTodoClick);

// * Or when the callback might be called from more than just one point in the code, for example:
/*-- Event Listeners --*/
document.getElementById('replay-btn').addEventListener('click', init);

/*-- Functions --*/
init();

function init() {
  // Initialize state and call render
}

// * 👀 Be careful not to invoke the callback when passing it
// i.e., do not put parenthesis after the function! 
document.getElementById('todo-container')
.addEventListener('click', handleTodoClick());
  //                       No parens please ^^

// ? 1) What's a callback function?
// A function that's passed as an argument to another function
// (usually to be called by that function at least once at some point)

const colors = ['red', 'green', 'blue'];

colors.forEach(function(color, idx) {
    console.log(`${idx + 1} - ${color}`);
});
// ? What part of the code is the callback function?
// * function(color, idx) {
// * console.log(`${idx + 1} - ${color}`);
// * }

// ? How many times will the higher-order function, forEach, invoke the callback?
// 3 (once for each element in the array)

// ? Why are Callbacks Needed?
// * There are two scenarios that require the use of callbacks:
// Certain functions & methods, by design, need a block of code in order to perform their purpose. 
// For example, both forEach & addEventListener need a block of code to run and callback functions provide that code.

// Certain higher-order functions/methods execute asynchronously in the background and are designed 
// to invoke callback functions when they have finished their task. More on this later in this lesson.

// * Using Callbacks with Array Iterator Methods
// The forEach method we’ve been using is a perfect example and has been designed to:

// Accept a callback function as an argument, and
// Invoke that callback once for each element in the array