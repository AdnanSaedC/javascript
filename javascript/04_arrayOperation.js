array1=["adnan","saed"];
array2=["ayeisha","hassan"];
array3=array1.push(array2);
//still array1 got updated
console.log(array1);
//
//you will just get number;
console.log(array3);
array3=[true,5]

//here concat returns a new array
array3=array1.concat(array3);
console.log(array3);

//best way to join multiple arrays
const joinedArray=[...array1,...array3];
console.log(joinedArray)

arrayUsingFlat=joinedArray.flat(Infinity);
/**
 * ()-1
 * (1)-diclose upto one array
 */
console.log(arrayUsingFlat);
joinedArray.push([true,true,[false]])
arrayUsingFlat=joinedArray.flat(1);
console.log(arrayUsingFlat);

//checking whether an array or not
//remember from now we are calling static methods
console.log(Array.isArray(joinedArray));


//creating an array from anything except object
console.log(Array.from("Adnan"));
console.log(Array.from([50]));
item1=5;
item2=45;
array6=Array.of(item1,item2);
console.log(array6);


//this will not work
console.log(Array.from(true));
console.log(Array.from({name:"adnan"}));
