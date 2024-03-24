var stuff = require('./stuff')

// everything can now be access using the var stuff and a dot notation
// with what you want to access that has been exported from the file

console.log(stuff.counter(['David', 'Gisselle']));

console.log(stuff.adder(2,3));

console.log(stuff.pi);

console.log(stuff.adder(stuff.pi, 5));

// output:
// There are 2 elements in this array
// The sum of the two numbers is 5
// 3.142
// The sum of the two numbers is 8.142

// * AFTER THE CHANGE TO THE EASIER WAY
// output:
// There are 2 elements in this array
// The sum of the two numbers is 5
// 3.142
// The sum of the two numbers is 8.142

// * And after the last example:
// output:
// There are 2 elements in this array
// The sum of the two numbers is 5
// 3.142
// The sum of the two numbers is 8.142