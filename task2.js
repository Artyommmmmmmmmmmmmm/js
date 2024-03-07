function Frog(){
    this.leg = 'leg'
}

object = new Frog()


function PropertyCheck(object, key){
    if (object.hasOwnProperty(key)) {
        return true
    }else {
        return false
    }
}
PropertyCheck(object, 'leg')
