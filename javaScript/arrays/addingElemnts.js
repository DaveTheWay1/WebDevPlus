// * Adding Elements to an Array
// * We can add elements to the END of an array using the PUSH method

let movies = ['Caddyshack', 'Interstellar', 'contact'];
// Let's add a movie to the end of the array
movies.push('Jaws');

console.log(movies);
// output: [ 'Caddyshack', 'Interstellar', 'contact', 'Jaws' ]

// * We can also add elements to the FRONT of an array with UNSHIFT
movies.unshift('Star Wars', 'Jurassic Park');
console.log(movies);
// output: [
//     'Star Wars',
//     'Jurassic Park',
//     'Caddyshack',
//     'Interstellar',
//     'contact',
//     'Jaws'
// ]

// * Note that both push() and unshift() methods can accept multiple 
// values and return the new length of the array.
// * used to to add elements 