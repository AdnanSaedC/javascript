const num1=100;
console.log(num1);

const num2=new Number(100.554525);
console.log(num2);

console.log(num2.toString().length);
//the result will be a string

console.log(num2.toFixed(2));
console.log(num2.toPrecision(11));
// the value can be upto 21
console.log(num2.toPrecision(2));
//make sure that you know how many digit before
//decimal point

//lets write numbers interms of 1000s
const hundreds=10000000;
console.log(hundreds.toLocaleString());
//it will return based on US standard
console.log(hundreds.toLocaleString('en-IN'));


//MAths
console.log(Math.abs(-4));
console.log(Math.round(4.65));
console.log(Math.sqrt(25));

const array=[4,5,8,4,7]
console.log(Math.min(4,7,65,1));
console.log(Math.max(...array));

console.log("math")

console.log(Math.floor(((((Math.random())+1)*10)%6)+1));

//formula to generate values in range
const min=10;
const max=20;
const x=Math.random();
console.log((Math.floor(x*(max-min+1)))+min);
//the range is from 10-20
//lets break down what is happening
/**
 * we have to generate a no from 10-20
 * including 10 and 20
 * 
 * we are generating a no
 * multiplying with no of digits
 * find the floor value
 * and adding with 10
 */

