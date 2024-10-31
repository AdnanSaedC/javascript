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
