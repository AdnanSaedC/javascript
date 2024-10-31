class User{
    //constructor
    constructor(username){
        this.username=username
    }
    //function
    print(){
        console.log(this.username);
        
    }
}

//extends
class Teacher extends User{
    constructor(username,tid){
        //no need to call this syntax
        //constructor.call(this,username)
        //this syntax will also not work because you call the contructor

        //nest modern syntax is
        super(username)
        this.tid=tid
    }
    printDetails(){
        console.log(`username: ${this.username} and tid: ${this.tid}`);
        
    }
}

const obj1=new Teacher("adnan",45)
obj1.printDetails()