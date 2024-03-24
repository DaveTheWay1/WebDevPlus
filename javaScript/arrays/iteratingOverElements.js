// * Using the forEach Iterator Method
// Although a for loop can be used to iterate over an array, 
// if we want to iterate over all of the elements in an array, 
// the forEach iterator method is a better approach because 
// it more clearly communicates the developer’s intention

const movies = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5'];
movies.forEach(function(movie) {
    console.log(movie);
});
// output:
// movie1
// movie2
// movie3
// movie4
// movie5

// * If you need to know the index of the current iteration,
// * the forEach method also happens to pass in the index 
// * as a second argument, 
// * for example:
movies.forEach(function(movie, idx) {
    console.log(idx + ' - ' + movie);
});
// output:
// 0 - movie1
// 1 - movie2
// 2 - movie3
// 3 - movie4
// 4 - movie5

// * FOR OF LOOP
// ES2015 provides the for...of loop for iterating over 
// the elements of arrays and other iterables such as strings

for (let movie of movies) {
    if (movie === 'The Matrix') break;
    console.log(movie);
}