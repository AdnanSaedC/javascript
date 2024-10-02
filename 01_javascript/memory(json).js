/**
 * all the primitive types are stored in stack
 * whereas all non preemptives are stored in heap
 * 
 * when a value is stored in stack you get a copy only
 * to work on not the exact same
 * 
 * whereas in heap you gets a refrence variable all
 * the changes is going to reflect directly
 * 
 */
let myName="Adnan";
let myFrndName=myName;
myFrndName="saed";
console.log(myFrndName);
console.log(myName);

//lets talk about non preemptive data type

let yourname={
    name:"adnan",
    age:45,
}
let yourFrndName=yourname;
yourFrndName.name="saed0";
console.log(yourname);
console.log(yourFrndName);
//name got changed everywhere

//lets prevent this we preserved our og object
//json padh aur stringyfi karde(cringify)
let theirFrnd=JSON.parse(JSON.stringify(yourFrndName));
theirFrnd.name="hi";
console.log(yourFrndName);
console.log(theirFrnd);


