//immediately invocked function expression
//used to invoke functions directly
//helps to prevent global pollution intervention

//named
//there are two things to call a function
function chai(){
    console.log("hi");
}
//to call
chai();

//normal iife
(function chaii(){
    console.log("hii");
})();

//simple and parameter
((name)=>{
    console.log(`${name}`);
})("adnan");

