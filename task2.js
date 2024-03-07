function Frog(){
    this.leg = 'leg'
}

object = new Frog()


function PropertyCheck(object, key){
    if (object.hasOwnProperty(key)) {
        console.log(key);
    }
}
PropertyCheck(object, 'leg')
