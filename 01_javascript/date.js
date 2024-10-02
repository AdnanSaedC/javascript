let myDate=new Date();
console.log(myDate);

//functions
console.log(myDate.getDate());

myDate=new Date("September 16,2023,17:05:45");
//you can also define like this
if(myDate.getDay()==2){
    console.log("tuesday");
}
console.log(myDate.getDay());
//sunday-staurday 0-6

console.log(myDate.getFullYear());
console.log(myDate.getMonth());
//months starts from zero

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//lets learn how to create date
let date1=new Date();
let date2=new Date(2023,0,13);


//adding time
let date3=new Date(2023,11,14,45,72,61);

//since hour,min and sec and bigger it will auto convert
console.log(date3.toLocaleString())

//normal one
let date4=new Date(2023,11,14,5,2,1);
let date5=new Date("12-14-2005");
console.log(date5.toLocaleString());

let date6= Date.now();
console.log(date6)
console.log(date5.getTime());

//converting into sec
console.log(Math.floor(date5.getTime()/1000));
console.log(date5.toLocaleString("default",{
    weekday:"long",
    month:"long",}));

    console.table([date1.toDateString(),date2.toLocaleDateString(),date3.toLocaleString(),date4.toLocaleTimeString(),date5.toString(),date6])

