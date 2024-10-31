//you have to use both get and set method its mandatory
//if you want to use even one

//it is used to control the way variable is accessed and used
//the catch here is you cant use the same variable

class User{
    constructor(username){
        this.username=username;
    }
    get password(){
        console.log("hello");
        return `${this._password}`
    }
    set password(value){
        console.log("setter called")
        this._password=value
    }
}


const obj1=new User("adnan")
console.log(obj1.password)
//you will get undefined
obj1.password="me"
console.log(obj1.password)

//you can also set using the OG way
//which is using constructor
class User1{
    constructor(password){
        this.password=password
        console.log("constructor being called");
        
    }
    get password(){
        console.log("hello");
        return `${this._password+" j"}`
        //you cant get the og password now
    }
    set password(value){
        console.log("setter called")
        this._password=value
        console.log("password is set now");
        
    }
}
const obj2=new User1("fhfhh")
console.log(obj2.password)

//let access the variable used in getters ans setters

console.log("new story");
console.log(obj2._password);
//the same which you used in setter


