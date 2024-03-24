// *  Using Callbacks with Asynchronous Functions
// Think of asynchronous programming as a way to allow multiple things to happen in a program at the same time…

// * Consider the following code:
let sales;
console.log(sales);  //-> undefined

// Assume getSalesData is an asynchronous function.
// When ran, it will wait in the "background"...
// and call its callback function when the data arrives
getSalesData(function(salesFromDB) {
  // Update sales variable when data arrives
    sales = salesFromDB;
}); 

console.log(sales);  //-> ???

// ? What will be logged out in the second console.log(sales) above?
// undefined because getSalesData() will wait in the background until the data from the database, 
// meanwhile, the remaining synchronous code runs.

// * For a better understanding of asynchronous code, we’ll start by confirming what synchronous code is…

// * Synchronous Code Execution
// So far, we’ve taken for granted that the code we write runs line by line and if we call a function/method, 
// it finishes before the next line of code runs, i.e., it executes synchronously.

// * For example:
const colors = ['red', 'green', 'blue'];

console.log('Code BEFORE the forEach...');

colors.forEach(function(color, idx) {
    console.log(`${idx + 1} - ${color}`);
});

console.log('Code AFTER the forEach...');
// output:
// Code BEFORE the forEach...
// 1 - red
// 2 - green
// 3 - blue
// Code AFTER the forEach...

// * Asynchronous Code Execution

// we can use the asynchronous setTimeout() & setInterval() functions which, when called, 
// wait in the background until a specified amount of time elapses, then they call their callback functions.

// * setTimeout() in action:
const colors1 = ['red', 'green', 'blue'];

console.log('Code BEFORE the forEach...');

// setTimeout accepts a callback & how long to wait before calling the cb
setTimeout(function() {
    colors1.forEach(function(color, idx) {
    console.log(`${idx + 1} - ${color}`);
    });
}, 1000);  // 1000 milliseconds (1 sec)

console.log('Code AFTER the forEach...');
// output:
// Code BEFORE the forEach...
// Code AFTER the forEach...
// 1 - red
// 2 - green
// 3 - blue

// ? If asked in a job interview, "What's a callback function?" - what would a good answer be?
// A function that's passed as an argument to another function.

// ? Are callback functions are defined differently than non-callback functions?
// No

document.getElementById('items')
.addEventListener('click', handleClick());
// ? Is the code above likely to work as expected?
// No, because the callback function, handleClick, is accidentally being invoked.

// ? Is the addEventListener method a higher-order function?
// Yes, because it accepts a function as an argument. As a reminder, a function is also considered 
// to be a higher-order function if it returns a function.