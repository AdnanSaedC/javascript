function setUsername(username){
    this.username=username;
    console.log("setUserName1 called")
}

function setUser(username,age){
    setUsername(username)
    this.age=age
}

let obj1= setUser("aadnan",16)
console.log(obj1);
let obj2=new setUser("aadnan",16)
console.log(obj2);

//in obj2 iam not getting username
//because when i called the username it got set but
//eventually lost due to lose in execution context 
//now let use call function which tell use my refrence variable

function setUser1(username,age){
    setUsername.call(this,username)
    this.age=age
}
let obj3=new setUser1("aadnan",16)
console.log(obj3);

//now you got the username too