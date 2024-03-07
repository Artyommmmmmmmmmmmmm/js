
function Frog(){
    this.leg = 'leg'
}

object = new Frog()

for (let key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(key);
    }   
}