const array1=["ADNAN" ,19, true,45,78,45];
console.log(array1);

array1.push(45);
console.log(array1);
array1.pop();
console.log(array1);
array1.unshift(45);
console.log(array1);
array1.shift();
console.log(array1);

/**
 * push and pop does all the opeartion at last
 * unshift and shift does all the opeartion at first
 */

//checking the whether exist and position 
console.log(array1.includes(45));
console.log(array1.indexOf(45));

console.log("before slice opeartion" ,array1);
console.log("opeartion slice" ,array1.slice(0,2));
console.log("After slice" ,array1);

//syntax is splice(index,from index how many elements)
console.log("splice opeartion" ,array1.splice(1,2));
//removing two values from this position
//last one is not index
console.log("the resultant" ,array1);

//another way of using splice
//arrayName.splice(position,0(insert)/1(replace),"value")
array1.splice(0,0,"saed");
console.log(array1);
//value got inserted

//now removing it
array1.splice(0,1,"HAHAHA");
console.log(array1);

//join method
let array2=["sea", "park"];
console.log(array2)
console.log(array2.join(";"));
array2=array1.join("  -><-  ");
console.log(array2);//array 2 got replaced
console.log(typeof array2);
//its no longer an array now