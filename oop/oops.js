// 
const user={
    name:"adnan",
    username:function(){
        //console.log(this);
        
    }
}
console.log(user.username());

//constructor
//gives new instance each time
//let find out the reason 
function User(username,age){
    this.username=username;
    this.age=age;
    this.log=function(){
        console.log("Hello")
    }
    return this
}

let userOne=User("adnan",45)
let userTwo=User("adn",45)
console.log(userOne);
//look userOne got overRide

//lets prevent this
userOne= new User("adnan",45)
let userThree=new User("adn",45)
console.log(userOne);
console.log(userOne.constructor);




//instance of
//let check they have instance or not
console.log(userOne instanceof User);
//true it has instance
console.log(userTwo instanceof User);
//false
//since it doesnot has
