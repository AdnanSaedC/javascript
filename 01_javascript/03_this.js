console.log(this)
//here it is empty but in windows it will work differently
//like how scoop behaves

function run(){
    let name="adnan"
    console.log(this.name);
    //it will not works works only in object
}
run();

//another way of declaring function

const walk=() =>{
    console.log(this);
    //thisn dont work under arrow functions
}
walk()

//best use of arrow function
//aka implicit return

const walking=(name)=> name;
const walked=(name)=> (name);
const chal=(naame)=>({name:naame})
//remember parenthesis not curly
//why because you cant return object with curly
//but with parenthesis you can
console.log(walked("adnan"))
console.log(walking("adnan"))
console.log(chal("adnan"))//you will get an object here


