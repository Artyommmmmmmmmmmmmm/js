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

function Fridge(){
    Electric.call(this);
    this.tempetature = '10';

    this.setTemperature = function(temp){
        this.temperature = temp
    };
};
function Microwave(){
    Electric.call(this);
    this.power = '700';

    this.setTemperature = function(pow){
        this.power = pow
    };
};


