//the goal is to create something like property which goes with
//everthing

//for example .length property goes with all string

Object.prototype.trueLength=function() {
    return this.trim().length;
}
//since everything gets inherited from object
//you will get this property everywhere

let adnan="Adnan Saed            "
console.log(adnan.length);
console.log(adnan.trueLength());

let obj={
    name:"adnan        "
}
console.log(obj.name.trueLength());


//lets add something to only string
String.prototype.printMe=function(){
    console.log(typeof(this));
    //it is an object but of diffent kind
    console.log(`${this}`);
    //you will get different things because here in the top
    //the output is this.toString()

    //whereas in the down its actual object
    console.log(this);
}
adnan="saed0"
adnan.printMe()
"hello hai".printMe()