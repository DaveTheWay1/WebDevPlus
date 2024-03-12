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
        // ? how are the properties and their corresponding values attatched?
        this.make = make;
        this.model = model;
        this.color = color;
        // we use the "this" keyword
        // * this refers to the new object we create.
    }
}

const car1 = new Vehicle('ford','mustang', 'red');
const car2 = new Vehicle('honda', 'accord', 'grey');