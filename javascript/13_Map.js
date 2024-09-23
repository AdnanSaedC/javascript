//only has unique values
//remembers the order in which stuff camw in
//it is an object


const leraningMap=new Map();
leraningMap.set("adnan","saed")
leraningMap.set("hassan","zaid")
leraningMap.set("ayeisha","zuha")

console.log(leraningMap)

for(let x of leraningMap){
    console.log(x)
}

//destructure
for(let [x,y] of leraningMap){
    console.log(`first name: ${x} - ${y}`)
}

//to get the value
console.log(leraningMap.get("adnan"));
console.log(leraningMap.delete("adnan"));
//this will return a boolean value
console.log(leraningMap.has("adnan"));

// for(let i=0;i<leraningMap.size;i++){
//     console.log(leraningMap[i])
// }
//this will not work

leraningMap.forEach((key,value)=>{
    console.log(`first namee: ${key} - ${value}`)
    //this will prevent in reverse
    //saed adnan
})

for(let x of leraningMap.keys()){
    console.log(x);
    
}

let x=[4,5,6]
console.log(x.length);
//here array is an object and length is a variable which
//stores no of items during execution times

//so it is different
x.forEach((y)=>{
    console.log(y);
    
})
x.forEach(function (y){
    console.log(y);
    
})
function printMe(item){
    console.log(item);
    
}
x.forEach(printMe)
//x.forEach(printMe(y))
//this will not work since it dont except the parameter

//behind the scene
x.forEach((value,index,arr)=>{
    console.log(`value-${value} index-${index}  entirearr-${arr}`)
    console.log(arr)//look it has given the entire array
})
