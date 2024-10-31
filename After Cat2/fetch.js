//it is the application of promise

fetch('https://jsonplaceholder.typicode.com/users')
.then((data)=>{
    console.log(typeof(data));
    
    let values= data.json();
    //converting string to json format
    
    console.log("after "+typeof(values));
    console.log("before: ",values);
    //you will get output as pending since not recived
    //so basically it works only after sending to another then
    return values
}).then((dataa)=>{
    console.log("recived ",dataa);
})
.catch((error)=>{
    console.log(error);
})

//internal working of fetch
/** error only occurs when it fails to even reach the link
 *  error 404 will come in resolve itself
 * 
 * fetch will be executed first because it comes under microtask
 * its like VIP line
 * 
 * it will given priority if it has got everything which is needed
 * to execute
 * 
 * now actual BTS
 * let response=fetch('url')
 * now first fetch will create a data(initial value can be undefined) and two arrays
 *     namely onfulfilled
 *            on rejected
 * then it goes to web/node api
 * and goes to request
 * if it reaches the website 
 *      the website will give some reposnse including error
 *      and it will get stored in onfulfilled which inturns in data
 * else
 *     onrejected then data
 * 
 * now its the responsiblity of the data to transfer
 * the value to response variable created by you which 
 * resides in memory(global)
 */