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
    // * we can take a method and have it do whatever we want. We override
    toString(){
        return `Vehicle Object: ${this.color} ${this.make} ${this.model}`
    }
}
const car1 = new Vehicle('ford','mustang', 'red');
console.log(car1.toString())
// * output: Vehicle Object: red ford mustang
console.log([1,2,3].toString());
// output: [object Object]
console.log({name:'evan', location:'virtual'}.toString());
// output: [object Object]
console.log(function(){}.toString());