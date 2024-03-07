
function Frog(){
    this.leg = 'leg'
}

object = new Frog()

function PropertyLook(object){
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key);
        }   
    }
}