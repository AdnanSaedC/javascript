//best with browser
//it certain element doesmot have something it
//will ask its parent


//everything is object and and it is derived from null

//null->object->array,string etc
//including functions

//objects get linked to only prototype

function multiplyBy5(num){
    return num*5
}
console.log(multiplyBy5(5));
console.log(multiplyBy5.prototype);
//you will get an empty object
//let add something to it
multiplyBy5.prototype=45
console.log(multiplyBy5.prototype);
multiplyBy5.me="adnan"
console.log(multiplyBy5.me);
console.log(multiplyBy5);


function user(username){
    this.user=username;
}
//lets add function inside the function
//user.prototype this will create an object here
user.prototype.print=function(){
    console.log(this.user," yooooo");
}

let obj1=user("adnan");
//console.log(obj1.print);
//this wont work because it is still a function

//let create an instance of that function which is an object
//then only all those stuff will work
let obj2=new user("adnasn")
console.log(obj2.print);
console.log(obj2.print());
//you will get undefined since its not returning anything

