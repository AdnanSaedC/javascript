//creating object from constructor
//using singelton
//only one object unique
//we will learn later

//object litreals
const  sym1=Symbol("85");

const obj1={
    key1:"value",
    //behing the scene
    //"key":"value"
    
    marks:[45,14],
    //remaining everything same but to add symbol
    [sym1]:"key1",
    adnan: function(){
        console.log("hi");
    }
    
}

//to access object value
console.log(obj1["key1"]);
//to access symbol
console.log(obj1[sym1]);


//to change the value
obj1.key1="value2"
console.log(obj1["key1"]);

//lets play with functions
//object.varaible=function(){}
obj1.addingFunction=function(){
    console.log("bye");
}
console.log(obj1.adnan());
console.log(obj1.addingFunction());

//to freeze the value
Object.freeze(obj1)
//you cant freeze any one key and value
//Object.freeze(obj1.key1)
//not possible
obj1.key1="value3"
//it wont reflect anymore


console.log(obj1)

