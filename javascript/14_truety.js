const value="";//considered as empty
const value2="adnan";//considered as true
if(value){
    console.log(" value true");
}
if(value2){
    console.log(" value2 true");
}
const array=[];//empty array ok
if(array){
    console.log("empty array ok");
}


//false values
//false 0 -0 0n(big int) ""(empty string) null undefined NaN

//else true
//truety value
//all non primitive types

//"0" "false" " " [] {}(object) function(){}

//we mostly uses array only
//check it this way
if(array.length==0){
    console.log("empty")
}

//to check the objects
const object={}

console.log([]==0)

//best way to check whether an object is empty or not
//it will return an object
if(Object.keys(object).length==0){
    console.log("arra  y is empty")
}

//false == 0 == ''

let x=5 ?? 10;
console.log(x);
x=null ?? 10;
console.log(x);
x=undefined ?? 10;
console.log(x);

//null colish operator
//here what will happen is if null/undefined
//then choose the next one
//two question mark is used
x=undefined ?? null;
console.log(x);
x=null ?? undefined;
console.log(x);
x=null ?? undefined;
console.log(x);
x=null ?? undefined ?? 10;
console.log(x);
//it mostly used to get return values from function

//ternery operator one question mark
const y=10;
y>=9 ? console.log("greter than nine"):console.log("less than nine");
;
//y>=9 ? console.log("greter than nine"):
//this will not work you have to include both positive
//and negative statement

//control + d is used to select multiple items
//same line at once