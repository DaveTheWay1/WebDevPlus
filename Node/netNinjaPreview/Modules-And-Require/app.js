// require('./count')
var counter = require('./count')

// * we run node app
// output:There are 2 elements in this array


// * THOUGH IF WE WERE TO RUN THE CONSOLE.LOG
// console.log(counter(['David', 'Gisselle']));
// * the method (counter) is not avaiable to use outside of the count module

// ONLY UNTIL WE ADD a module.exports = whatever we want to be made avaiable
// to the file that contains what we want made avaiable

// THEN FOR IT TO WORK the require turns into a value of a variable
console.log(counter(['David', 'Gisselle']));
// output:
// There are 2 elements in this array // one from the count module itself
// There are 2 elements in this array // another from the console.log on this file