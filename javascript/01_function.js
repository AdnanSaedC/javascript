//function(parameters){
//}

//function(arguments)
//when calling

//function dont have a return type here
//if parameter not given then undefined is given as parameter



function add(x,y){
    return y;
}
console.log(add());

//default

function addDefault(x,y=5){
    return y;
}
console.log(addDefault());
console.log(addDefault(0,45));


//undefined is considered as false here
if(!undefined){
    console.log(("dbhdhdh"));
    
}
//rest operator
const restOperator=function(num1,...num2){
    return num2;
}
//the triple dots is known as rest operator
console.log(restOperator(1,2,5.8,75,45))


//anyobject

const objectAsParameter=function(anyobject){
    console.log(anyobject.name);
}
const obj1={
    name:"adnan0",
}
console.log(objectAsParameter(obj1));

//creating object on the go
console.log(objectAsParameter({
    name:"saed",
}));

//giving array in function
const arrayFunction=function(array){
    console.log(array);
    return array
}
arrayFunction([1,2,5,,7,4,4,])
const array2=arrayFunction([1,2,5,,7,4,4,])
arrayFunction(array2)

