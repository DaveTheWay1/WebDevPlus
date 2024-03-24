// * let variables can be updated after they are declared
let score = 25;
score = 100;  
// no problem
console.log(score);
// output: 100

// * we can add multiple mutable variables at once using commas
let name = 'Wilmae', age, town = 'Bedrock', num = 1;
console.log(name, town, num);
// the above works but if age, the undefined variable, were included it would trigger an error
console.log(age);
console.log(town);
console.log(num)