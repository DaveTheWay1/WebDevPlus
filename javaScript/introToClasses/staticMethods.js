// * not to memorize but STATIC METHODS are methods that can only be used by the class
// * EX:

class Aireplane {

    static airplaneId = 1;
    // static property.. go outside of the constructor because that would be an instnce prop

    constructor(pilot){
        this.pilot = pilot;
        this.passangersAboard = false;
        this.engineOn = false;
        this.safe = false;
        this.ready = false;

        this.id = Aireplane.airplaneId;

        Aireplane.airplaneId += 1;
        // * what this does is that for every now airplane it will increase the id by 1.


    }
    start(){
        this.engineOn = true;
        console.log('Starting engine');
    }
    passangers(){
        this.passangersAboard = true;
        console.log('Passangers have boarded.')
    }
    safetyCheck(){
        this.safe = true;
        console.log('Safety check complete.')
    }
    takeOff(){
        this.ready = true;
        console.log('And we are ready for take off');
    }
    // * static method example:
    static whatAmI(){
        console.log('I am the airplane class.')
    }

    static printAirplaneQTY(){
        console.log(Aireplane.airplaneId -1);
        // we subtract 1 because we started it at 1
    }
}

const jet = new Aireplane('Pilot Ramirez-Vazquez');
const jet1 = new Aireplane('Pilot David Ramirez-Vazquez');
jet.takeOff();
jet1.takeOff();
// instance methods ^

// jet.whatAmI()
// output: TypeError: jet.whatAmI is not a function.. BECAUSE ITS NOT A FUNCTION OF THE INSTANCE BUT OF THE CLASS

Aireplane.whatAmI();
// output: I am the airplane class.

// * STATIC METHODS CAN ONLY BE USED ON THE CLASS NOT ON AN INSTANCE OF THE CLASS

Aireplane.printAirplaneQTY()
// output: 2
