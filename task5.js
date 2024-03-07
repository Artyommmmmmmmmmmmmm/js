class Electric {
    constructor(){
    this.turnedOn = false;
    }
    turnOff(){
        this.turnedOn = false
    };

    turnOn(){
        this.turnedOn = true
        return `turnedOn is True`
    };
};

class Fridge extends Electric{
    constructor(){
        super()
        this.tempetature = '10';
    }
    setTemperature(temp){
        this.temperature = temp
    };
};
class Microwave extends Electric{
    constructor(){
        super()
        this.power = '700';
    }    
    setTemperature(pow){
        this.power = pow
    };
};

