function user(username) {
    this.username=username
    console.log("being set in the function itself");
    

    Object.defineProperty(this,"username", {
        get: function(){
            console.log("iam giving the username");
            return username+" by me"
        },
        set: function(value){
            this._username=value
            console.log("set through me")
        }
    })
}

let obj1=new user("adnan")
console.log(obj1.username);
//lets set 
obj1.username="saed"
console.log(obj1.username);

//previously this was not the case 
//the getter were invoked each time

