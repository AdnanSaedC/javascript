//Summary
/**
 * number string-number=nan
 *        undefined-number=nan
 *        null=0
 *        number=number
 *        true=1
 * 
 * Boolean string-bool=true
 *         emptyString=false
 *         number=true
 *         null=false
 *         undefined=false
 * 
 *  string you can do any opertaion
 */
let score="adnan34";
let score1=Number(score);
console.log(score1,typeof score1);

score="33";
score1=Number(score);
console.log(score1,typeof score1);

score=true;
score1=Number(score);
console.log(score1,typeof score1);

score=null;
score1=Number(score);
console.log(score1,typeof score1);

score=undefined;
score1=Number(score);
console.log(score1,typeof score1);

//boolean
let convertBoolean=54;
let convertBoolean1=Boolean(convertBoolean);
console.log(convertBoolean1,typeof convertBoolean1);

convertBoolean="adnan";
convertBoolean1=Boolean(convertBoolean);
console.log(convertBoolean1,typeof convertBoolean1);

convertBoolean="";
convertBoolean1=Boolean(convertBoolean);
console.log(convertBoolean1,typeof convertBoolean1);

convertBoolean=1;
convertBoolean1=Boolean(convertBoolean);
console.log(convertBoolean1,typeof convertBoolean1);

convertBoolean=null;
convertBoolean1=Boolean(score);
console.log(convertBoolean1,typeof convertBoolean1);

convertBoolean=undefined;
convertBoolean1=Boolean(score);
console.log(convertBoolean1,typeof convertBoolean1);

//string
let string=null;
let string1=String(string);
console.log(string1,typeof string1);

string=undefined;
string1=String(string);
console.log(string1,typeof string1);
