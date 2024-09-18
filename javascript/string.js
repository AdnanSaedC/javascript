const namee="adnan";
const code="0042";

console.log(`My id ${namee,code}n`);
//we got only the last one sorry

console.log(`My id ${namee}${code}n`);

/**
 * lets create a string object
 */

let gameName=new String("a$dnan");
console.log(gameName);

//properties
console.log(gameName.length);

//to get ascii character
console.log(gameName.charCodeAt(0),gameName.charCodeAt(1));

// console.log(gameName.endsWith(character,position));
console.log(gameName.endsWith("n",6));
console.log(gameName.endsWith("n"));

//to check whether it includes or not
console.log(gameName.includes("an"));

//to get the index
console.log(gameName.indexOf("da"));
//-1 since this combination doesnot exist

console.log(gameName.lastIndexOf("a"));

//to compare
console.log(gameName.localeCompare("adnan"));
//zero means true

// console.log(gameName.padEnd(resultantlengthOfthestring,what));
console.log(gameName.padEnd(10,"ab"));
console.log(gameName.padStart(10));
//10 space will be added

//to repeat a string
console.log(gameName.repeat(2));

let me="heloo worlf kkjjf jkkjhh";
console.log(me.replace("k",4));
//only first k got changed

console.log(me.replaceAll("k",4));
//all the k got changed
console.log(me.slice(1,4));
me=" o tw thr four fivee sixsix";
console.log(me.split(";"));


//everything was one because splitted based comma no comma so considered as one 
me=" o tw thr ;four ;fivee sixsix";
console.log(me.split(";"));


me=" o tw thr four fivee sixsix";
const word=me.split(' ')
//split and aading space
//add something run you get different output 
console.log(word[6]);


console.log(me.trim());
//initial space got removed