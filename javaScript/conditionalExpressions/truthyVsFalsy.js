// * Truthy vs Falsy

// * A “truthy” 
// value is a value that is considered to be true when used in a conditional expression such as that used in an if statement
// * “falsy” 
// is a value that is considered to be false

// ? Why this truthy and falsy business?
// The ability to use non-boolean expressions as booleans (true or false) 
// allows us to write code that is more concise.
if (true) {
    console.log('truthy!');
} else {
    console.log('falsy!');
}
// output: truthy

if (4) {
    console.log('truthy!');
} else {
    console.log('falsy!');
}
// output: truthy

if (0) {
    console.log('truthy!');
} else {
    console.log('falsy!');
}
// output: falsy

// * Everything in JS is truthy except for the following six things:
// * false (of course)
// * The null data type
// * The undefined data type
// * The empty string ''
// * The number 0 (zero)
// * NaN (special number)