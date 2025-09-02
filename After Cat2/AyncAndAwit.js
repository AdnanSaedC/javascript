/***
await is used to either get the value from a promise whose state is not initial, and async is to tell the compiler that this function will return a promise
. A promise is nothing but its value will be available later.
So it tells the compiler that its value will be available later, and await is to stop at that particular line and wait for the value.

mine og version 
o awit is used to enther grt the value from a promise who state is not initial 
and aync is to tell the compiler that this function will return a promise and promise is 
noting but its value will be avilable later so it tells the compiler that its value will be avalible 
later and await is to stop at that particular line and wait for the value just correct the spelling mistakes
*/




//lets first understand why it even exits

/**
 * first it certain condition you want to move only when the promise is succesfully completed
 * like -network got confirmed,database got connected etc
 */

const promise=new Promise((resolve,reject)=>{
    console.log("promise got created")
    setTimeout(()=>{
        console.log("inside timeout");
        
        //play with this variable to know how things operate
        let error=false
        if(error){
            reject()
        }
        else{
            
            resolve("no error bro")
        }
        
    },0)
}).then(()=>{
    console.log("hi");
})

// lets take this value using async and awit
async function consumingPromise(){
    try {
        //it will work for resolve
        let result=await promise
        //waiting for promise to return something
        console.log("resolved "+result);
        
    } catch (error) {
        //will work for reject
        console.log("rejected"+error);
        //since we are sending nothing we undefined
        
    }
}
consumingPromise()

