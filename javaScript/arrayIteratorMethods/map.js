// * map(cb)
// purpose: Transform source array into a new array
// returns: New Array
// Callback Should: Return what goes in the new array
// Callback’s Args: (elem, idx)

const nums = [1, 2, 3];
const squared = nums.map(function(num) {
    return num * num;
});
// squared -> [1, 4, 9]

/*--- using an arrow function for the callback ---*/
const squared1 = nums.map(num => num * num);
console.log(squared1);
// output:[ 1, 4, 9 ]

// * Here we want to map an object of “people” objects into an array of DOM elements:

const people = [
    {name: 'Fred', town: 'Bedrock'},
    {name: 'Susan', town: 'Miami'},
    {name: 'John', town: 'Arcadia'}
];

const els = people.map((person, idx) => {
    const el = document.createElement('div');
    el.innerHTML = `${person.name} <span>(${person.town})</span>`;
    // The new array will contain whatever
    // is returned from the callback 
    return el;
});
  // Append the <div>s to the end of the <body>
els.forEach(el => document.body.append(el));

// ? YOU DO
// Given an array of instructors,

const instructors = ["Alex", "Stephanie", "Daniel"];
// Use map to create a new array that adds the string “ is awesome” to each element in the array.

const theyreAwesome = instructors.map(one => `${one}is awesome!`);
console.log(theyreAwesome);
// output: [ 'Alexis awesome!', 'Stephanieis awesome!', 'Danielis awesome!' ]