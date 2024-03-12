// * create 5 car objects
// const car1 = {
//     make:'ford',
//     model:'mustang',
//     color:'red'
// }

// const car2 = {
//     make:'honda',
//     model:'accord',
//     color:'grey'
// }

// const car3 = {
//     make:'dodge',
//     model:'charger',
//     color:'maroon'
// }

// const car4 = {
//     make:'toyota',
//     model: 'corolla',
//     color:'white'
// }

// const car5 = {
//     make:'cadillac',
//     model:'blackwing',
//     color:'black'
// }

// * .. that was tedious right? 
// * the above is object literal

// * HELLO CLASSES!!!
// we can creete a blue print and then use that to use many
// * though syntax is LIKE function.. classes return objects

class Vehicle{
    // * constructor method used to recieve inputs
    constructor(make,model,color){
        // * inputs are used to assign values to the properties for the resulting objects
        // * you dont always have to pass everything as parameter, you can have a default
        // ? how are the properties and their corresponding values attatched?
        this.make = make;
        this.model = model;
        this.color = color;
        this.isRunning = false;
        // we use the "this" keyword
        // * this refers to the new object we create.
    }
}

const car3 = new Vehicle('dodge','charger', 'maroon');
console.log(car3.isRunning);
// output: false
const car1 = new Vehicle('ford','mustang', 'red');
console.log(car1.isRunning);
// output: false

console.log(car1.model);
// * "this"
// refers to the object that the class creates even in the process of constructing it.
// the car1 is the same as the "this" -> they both point/refer to the same thing

const car2 = new Vehicle('honda', 'accord', 'grey');
// * the new keyword signals to javascript that we are about to create a new object
// javascript will look at the args and then at the constructor and assign as properties.


console.log(typeof Vehicle);
// output: function
// ? why? 
// * prior to 2015 javascript did not have classes


// ? ❓ What other attributes might a car have?
// const hybridCar = {
//     make: 'Toyota',
//     model: 'Prius',
//     color: 'black',
//     isRunning: false,
//     start: function() {
//         hybridCar.isRunning = true;
//         console.log('Running!')
//     },
// };

// * classes vocab
// instance: an object created by a class
// instantiate:  
// instantiation:  