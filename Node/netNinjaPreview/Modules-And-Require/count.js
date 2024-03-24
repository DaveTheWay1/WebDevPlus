var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array'
};

console.log(counter(['David', 'Gisselle']));
// output: There are 2 elements in this array


// if we wanted to use this code elsewhere... we would use the require

// * to make the counter available anywhere that the file has been required

module.exports = counter;

// * now counter function can be called from anywhere that has the require
// ! count but the require must be turned into a the value of a variable