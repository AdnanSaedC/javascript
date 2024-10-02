//data types are divide based on storage and excess
//the classification are primitive and non primitive data types

//primitive
//they are seven

/**
 * string number bigint null(empty value) undefined(value dont know) boolean symbol
 * 
 * how they are different 
 * undefined the variable is declared but not initialixed
 * NaN when converted to number
 * 
 * null is on the other hand
 * tells the computer that it is intentionally empty
 * 0 when converted to number
 * 
 */

let hi;//undefined
console.log(typeof hi);

hi=null
console.log(typeof hi);//you will get object

/**
 * everything will be treated us number and bigint
 * no float etc
 */
const pi=3.14;
let x=4;
let y=4n;
console.log(typeof pi,typeof x,typeof y);

/**
 * lets play with symbols
 */

const id=Symbol('123');
const id2=Symbol('123');
console.log(id,id2);
console.log(id==id2);//we got false
//because they have a unique value like memory loc
//even the values are same yet they are unique


//lets play with non preemptive data types okay
const heros=["raj",'warikooo','me'];
//this is an array
console.log(heros);

//objects

let me={
    name:"adnan",
    age:18,//colon careful
}
console.log(me);

//functions
let myfrnd= function(){
    console.log("hi");
}
myfrnd();

//lets check the data type of these
console.log(typeof heros,typeof me,typeof myfrnd);
//remember when calling the function you have to use 
//parenrthesis else dont required 

//All nonpreemptives are objects except functions

//javascript is dynamic language since no need 
//to declare the datatype





