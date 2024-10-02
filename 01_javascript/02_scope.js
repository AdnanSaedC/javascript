//scoop works different in node(this envo) and 
//windows includes browser(chrome etc)


//global scoop
a=30;
let b=47;
if(true){
    //local scoop
    a=40;
    //a is comming out of loop
    //so use let
    let b=400;
    //it will remain inside this loop only
    console.log("inner",a);
console.log(b);

}
console.log("ouyter",a);
console.log(b);

one()
function one(){
    function two(){
        let aa=5;
        console.log("ji");
        console.log(this)
    }
    two();
    //console.log(aa); you cant access this 
    //since scope is limited
}

//the above function you can use but not the one
//which is below
//three();
//dont know why as of now

//but hopefully you may know the reader
//since it is a constant it will be defined at runtime
//thus when three() got compiled it dont know where it is
const three=function(){
    console.log("Bye")
}

console.log(this)