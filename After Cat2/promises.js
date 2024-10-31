//promises tells you whether a thing got completed or not
    //and also returns its value

    //remember javaScript is an asynchoronous thing
    //so it goes to the queue and waits and once it gets executed
    //promise is used to know its status and return value

    //three states
    //pending -not yet started
    //fullfilled-completed
    //rejected

    //lets create a promise
const promiseOne=new Promise(function(resolve,reject){
    function Mywork(){
        resolve()
        console.log("p1 Remember iam will be called first not resolve since it goes to queue")
    }
    Mywork();
})

promiseOne.then(()=>{
        console.log("p1 Sucessfull")
})

//lets create a promise without variable and pass some value
new Promise(function(resolve,reject){
    function promiseTwo(){
        console.log('p2 Promises two is called')
        let x="Adnan saed";
        resolve(x)
    }
    promiseTwo()
})
.then((value)=>{
    console.log(value)
    return value+" p2 send by me"
})
.then((value)=>{
    //this is called chaining
    //remember it is the only way to get values from a 
    //then or catch function as of now
    console.log(value)
})

//let deals with errors
const promiseFour=new Promise((resolve,reject)=>{
    resolve()
    let errors="p4 dont know"
    reject(errors)
    console.log("hi iam p4")
})

promiseFour.then(()=>{
    console.log("p4 hi it will be executed when success\n currently no condotions")
})
.catch((value)=>{
    return value
}).then((value)=>console.log("p4 catched it using then"))
.finally(()=>console.log("p4 promise four got executed"))


//look till now the flow of output is
/**
 * first the synchronous part gets executed the promise creation
 * then .then,.catch,.finally functions get executed at last functions like
 * functions like setTimeout,setInterval,setImmediate gets executed
 * basically those which involves time,DOM like click scroll load i/o opeartions
 */

