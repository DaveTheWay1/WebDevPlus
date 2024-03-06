// * Removing Elements from an Array
const movies = ['Star Wars','Jurassic Park','Caddyshack','Interstellar','contact','Jaws']

// * We can REMOVE a SINGLE element from the END of an array using the POP method:

// Remove Jaws (last element)...
let movie = movies.pop();
console.log(movie, movies);

// output:
// Jaws [
//     'Star Wars',
//     'Jurassic Park',
//     'Caddyshack',
//     'Interstellar',
//     'contact'
// ]

// * We can also remove from the FRONT of an array using the SHIFT method
// movie will now hold 'Star Wars'
movie = movies.shift();
console.log(movie);
// output: Star Wars
console.log(movies);
// output: [ 'Jurassic Park', 'Caddyshack', 'Interstellar', 'contact' ]