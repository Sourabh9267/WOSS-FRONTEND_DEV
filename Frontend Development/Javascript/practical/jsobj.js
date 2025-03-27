
// Object using Object Constructor

// const obj=new Object();


// obj.name="Sourabh";
// obj.age=23;
// obj.mno=6266030044;

// console.log(obj);


// for(let key in obj)
// {
//     console.log(obj[`${key}`]);
    
// }


// Object using Object Literals


// const obj={name:"Sourabh Gour",
//     age:22,
//     mno:6266030044
// };

// for(let i in obj){
//     console.log(obj[`${i}`]);
    
// }





// Object Deep Copy using Object.Assign();

// const obj2={};

// const obj={name:"Sourabh Gour",
//     age:22,
//     mno:6266030044
// };


// Object.assign(obj2,obj);

// console.log(obj2);

// obj2.name="Dogesh";
// console.log(obj2);
// console.log(obj);

// Object Shallow Copy using assignment operator


const obj={name:"Sourabh Gour",
    age:22,
    mno:6266030044
};


const obj1 = obj;
console.log("Obj");
console.log(obj);

console.log("Obj1");
console.log(obj1);



obj1.name="Name changed";

console.log("Obj");
console.log(obj);

console.log("Obj1");
console.log(obj1);

