//to goal is to make something constant like 
//pi that nobody can alter iterate etc


const Adnan={
    name:"Adnan saed",
    age:48,
}

//lets understand what are the properties each key has 
console.log(Object.getOwnPropertyDescriptor(Adnan,"name"));

//now you have four properties in that
//let make it like nobody can change and iterate

Object.defineProperty(Adnan,"name",{
    writable: false,
    enumerable: false,
})

//for entire property use properties

for(let [key,value] of Object.entries(Adnan)){
    console.log(key+" : "+value);
    //look you cant access name now
}