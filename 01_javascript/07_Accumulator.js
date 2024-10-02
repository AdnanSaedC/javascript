let shoppingCart=[
    {
        name:"towel",
        prive:100,
    },
    {
        name:"cup",
        prive:10,
    },
    {
        name:"bed sheet",
        prive:1000,
    }
]

const total=shoppingCart.reduce((total,itemPrice)=>{
    return total+itemPrice.prive},0)
console.log(`Bill ${total}`);

//what is happenning
//.reduce(initial Value,arrayValue=>{
    // return initail Value+array Value},the value hold by initial value)

let array=[1,2,3]
let print=array.reduce((total,value)=>total+value,100);
console.log(print);