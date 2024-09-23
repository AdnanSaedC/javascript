let array=[45,45,45,82,4,25,2,2,2,2,2,6,58,55,6,5,5]


//after continue nothing executes


//for loop dont have bound value here
//then next will be undefined
for(let i=0;i<=array.length;i++){
    console.log(array[i]);
    
}
for(let x of array){
    console.log(x);
}

let object={
    name:'adnan',
    age:45,
}
for(let y in object){
    console.log(` ${y} :${object[y]} `);
}

let string="adnan Saed"
for(let x of string){
    if(x==" "){
        continue;
    }
    console.log(x);
}

let array1=[{name:"adnan"},{age:65},true,45]
for(let x of array1){
    for(let y in x){
        console.log(`${y} : ${x[y]}`)
    }
    if(typeof(x)!="object"){
        console.log(x);
    }
}
