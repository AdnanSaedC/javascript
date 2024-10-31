class user{
    constructor(username,age){
        this.username=username
        this.age=age
    }
    displayUserName(){
        return `${this.username}`
    }
}

let obj1=new user("adnan",16)

console.log(obj1.displayUserName());


//behind the scene

function user1(username,age){
    this.username=username
    this.age=age
}
user.prototype.displayUserName=function(){
    return `${this.username}`
}
let obj2=new user("saed",160)

console.log(obj2.displayUserName());
//to check the instance
console.log(obj2 instanceof user);

