// var counter = function(arr){
//     return 'There are ' + arr.length + ' elements in this array'
// };

// var adder = function(a,b){
//     return `The sum of the two numbers is ${a + b}`;
// };

// var pi = 3.142;

// * now we want to export more than one thing which the below doesn't do that..
// module.exports = counter;
// * but the below now is a way this can be accomplished
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// * BUT THERE IS ALSO AN EASIER WAY
// by taking the above and turning it into the below

// module.exports.counter = function(arr){
//     return 'There are ' + arr.length + ' elements in this array'
// };

// module.exports.adder = function(a,b){
//     return `The sum of the two numbers is ${a + b}`;
// };

// module.exports.pi = 3.142;

// And yet another way..

var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array'
};

var adder = function(a,b){
    return `The sum of the two numbers is ${a + b}`;
};

var pi = 3.142;

module.exports = {
    counter: counter,
    adder:adder,
    pi:pi
};