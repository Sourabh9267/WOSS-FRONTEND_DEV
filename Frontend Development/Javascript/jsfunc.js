// Normal Function in JS

function doWork(){
    console.log(":::: Normal Function in Javascript::::");
    let x=10;
    let y=12;
    console.log(x+y);
    console.log("\n");
}
doWork();



function doWork_parameterized(a,b){
    console.log(":::: Normal Parameterized Function in Javascript::::");
    return a+b;
}
console.log("\n");
console.log(doWork_parameterized(20,30));


// Annynomous Function (Unnamed Fx)

let x = function () {
    console.log(":::: Annymous Function in Javascript ::::");
    console.log("Webs Optimization Software Solution: ");
    console.log("\n");
}

x();


// Function using Function Constructor

let fx = new Function("x=4","y=4", "return x+y");
console.log("Function using Function Constructor");
console.log(typeof fx);
console.log(fx(5,5));



// Immediatly Invoked Function Expressions IIFE


(function(){
    console.log(": IIFE Function Executed : ");
})();




