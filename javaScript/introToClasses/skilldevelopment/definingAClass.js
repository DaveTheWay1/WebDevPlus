class Aireplane {
    constructor(pilot){
        this.pilot = pilot;
        this.passangersAboard = false;
        this.engineOn = false;
        this.safe = false;
        this.ready = false;
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
}

const jet = new Aireplane('Pilot Ramirez-Vazquez');
console.log(jet.pilot);
jet.safetyCheck()