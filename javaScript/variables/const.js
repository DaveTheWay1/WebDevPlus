// * const variable cannot be updated
const score = 25;
score = 100;  
console.log(score);
// Uncaught TypeError: Assignment to constant variable

// * although a const cannot be reasigned - if the const variable
// references an object, such as dictionaries or arrays, they can be mutated

const person = {

}
// we start off empty
// ? but like we said earlier we can mutate

person.name = "David"; 
person.age = 24
console.log(person);
// { name: 'David', age: 24 }