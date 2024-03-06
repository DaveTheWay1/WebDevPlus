// * undefined
// Unlike null which we use to intentionally represent no value, 
// undefined is commonly used by JavaScript itself to represent no value:
// * A variable that is defined but not assigned to has the value undefined, for example:

let cohort;

// * A function that doesn’t return a value will return undefined instead
function noReturn() {
    console.log('This function will return undefined');
}
  // result will be undefined
let result = noReturn();