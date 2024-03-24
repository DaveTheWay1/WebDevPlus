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
        start() {
            this.isRunning = true;
            console.log('Running!');
    }
        stop() {
            this.isRunning = false;
            console.log('Stopped!')
        }
}
const car1 = new Vehicle('ford','mustang', 'red');

// * METHODS!!!
const nums = [1, 2, 3, 4, 5];
// nums.forEach(num => console.log(num));
// for each is an example of instance/prototype method

// * static methods
// not as common but only called by a class itself and not by the instances of a class
// * ex:
// Array.isArray is an example of a static method
const nums1 = [1, 2, 3, 4, 5];
console.log(Array.isArray(nums1)); //-> true
Array.isArray([]) // -> true
Array.isArray('hello') // -> false

// * another ex:
Math.random();
console.log(' ')
console.log('testing instance methods')
// * working with instance methods
console.log(car1.isRunning)
// output: false
car1.start()
// output: running!
console.log(car1.isRunning);
// output: true
car1.stop()
// output: stopped!
console.log(car1.isRunning);
// output: false

console.log('')
console.log('console logging car1:')
console.log(car1);
// output:
// Vehicle {
//     make: 'ford',
//     model: 'mustang',
//     color: 'red',
//     isRunning: false
//   }
