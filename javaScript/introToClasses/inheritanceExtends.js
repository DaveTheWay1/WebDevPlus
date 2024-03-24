class Vehicle{
    constructor(make,model,color){
        this.make = make;
        this.model = model;
        this.color = color;
        this.isRunning = false;
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

class TowTruck extends Vehicle {
    constructor(make, model, color, bedLength, capacity){
        // we need to pass up the base class properties
        super(make,model,color) //super efers to the super class - aka the class we extend from
        // pro-tip: super "invokes" the constructor method inside of the Vehicle class. 
        // so, it'll pass it up to the original
        this.bedLength = bedLength;
        this.capacity = capacity;
        // because of inheriting it will also start and stop
    }
    lowerToBed(){
        console.log('Lower flatbed for pick up.')
    }
}
const eighteenWheelerHauler = new TowTruck ("Ford", "f150", "red", 42, 1500);
console.log(eighteenWheelerHauler);
eighteenWheelerHauler.start();
eighteenWheelerHauler.stop();
eighteenWheelerHauler.lowerToBed()
// output:
// TowTruck {
//     make: 'Ford',
//     model: 'f150',
//     color: 'red',
//     isRunning: false,
//     bedLength: 42,
//     capacity: 1500
//   }
//   Running!
//   Stopped!
// Lower flatbed for pick up.
// * STATIC METHODS CAN ALSO BE INHERITED
// ! NOT RECOMMENDED TO EXTEND A CLASS MORE THAN 2 OR 3 TIMES