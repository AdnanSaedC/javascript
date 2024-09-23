//creating an object of singelton

const obj1=new Object();
console.log(obj1);

obj1.agge=18;
obj1.age=45;
console.log(obj1);

//creting normal object which is not singelton

const obj2={}
obj2.name="adnan";
const date={
    date:14,
    month:{
        month:"feb",
    }
}
obj2.age=date;
console.log(obj2);
console.log(obj2.age);
console.log(obj2.age.date);

const obj4={
    age:75,
}

//now how to add objects
console.log("printing obj3");
const obj3={...obj1,...obj2,...obj4};
console.log(obj1);
console.log(obj2);
console.log(obj3);
//look in obj3 the age variable whivh is common
//for both the obj2 last object was chosen

//accessing objects from array
const array=[obj1,obj2,obj3,obj4]
console.log(array[0].age);

//checking whether a key and value pair exists or not

console.log(Object.keys(obj1));
console.log(Object.values(obj1));

//to get values and keys as separeted array
console.log(Object.entries(obj1));

//to check whether the object has a key or not
console.log(obj1.hasOwnProperty("name"));
console.log(obj1.hasOwnProperty("age"))

//destructuring-assesting the values just by using keys
//assesing withount changing the name
const {age}=obj1;
console.log(age);

const {age: a}=obj1;
console.log(a);
//Json
