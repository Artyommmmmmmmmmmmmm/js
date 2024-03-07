function Electric(){
    this.turnedOn = false;

    this.turnOff = function(){
        this.turnedOn = false
    };

    this.turnOn = function(){
        this.turnedOn = true
        return `turnedOn is True`
    };
};

fridge = new Electric();
fridge.temperature = '10';
fridge.setTemperature = function(temp){
    fridge.temperature = temp
};

microwave = new Electric();
microwave.power = '700';
microwave.setPower = function(pow){
    microwave.power = pow
};



