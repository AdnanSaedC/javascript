const user={
    username:"Adnan",
    //if you use normal username this will work perfectly fine
    //but dont use that in getter and setters


    get username(){
        console.log("you are accessing through me");
        return `${this._username}`
    },
    set username(value){
        console.log("being set through me");
        this._username=value
        
    }
}

console.log(user.username);
user.username="saed"
console.log(user.username);


//to create an object using object
//new object
console.log("new object");

let tea=Object.create(user)
console.log(tea.username);
tea.username="n saed"
console.log(tea.username);


//hey we are using different variable for then fact that
//compiler just understands whether to give the variable or call rthe function
//basically keep the name of the function and variable different


//because its like going infinitely
//function->this.function