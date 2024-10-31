let child={
    name:"adnan"
}
let parent={
    work:"adnanParent"
}
let grandParent={
    age:"adnanGrandparent"
}
child.__proto__=parent
console.log(child.work);
console.log(child.age);


//anotherWay
Object.setPrototypeOf(parent,grandParent)
console.log(child.age);

//execution
//global->function1->funtion inside this function (here this will point to global variable)
//https:excalidraw.com/#room=0faecc878d07ad8068c0,jx2kFLDSTCyD9augNh1Ggg

