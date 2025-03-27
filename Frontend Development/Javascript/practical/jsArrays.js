// Array Declaration

const arr=new Array();

arr[0]="Hey0";
arr[1]="Hey1";
arr[2]="Hey2";
arr[10]="Hey50";


for(let i of arr)
{
    console.log(i);
}
console.log("array before deletion");
console.log(arr);
for(let a=0 ; a<arr.length; a++)
{
        arr.pop();
}
    
    console.log("array after deletion");
console.log(arr);
// Delete by Array length operator value  = 0 ;
arr.length=0;


console.log(arr);

for (let x=0 ; x<10; x++ )
{
    console.log(arr[x]);
}


// Array Built-in Methods

// Constructing an Array by Array constructor then pushin values with push();


const arr1= new Array();
arr1.push(1,2,3,4,5,6,7,8);
console.log(arr1);
console.log("\n\n");


    // Shift Method

    
    console.log(":::: Array Shift method ::::");
    console.log();
    arr1.shift();
    arr1.shift();
    arr1.shift();
    arr1.shift();
    console.log(arr1);
    console.log("\n\n");
    
    // Unshift Method
    
    console.log(":::: Array Unshift method ::::");
    console.log();
    arr1.unshift();
    console.log(arr1);
    console.log("\n\n");
    
    // Concat Method 
    console.log(":::: Array Concatenation ::::");
    console.log();
    const arr2=[2,4,6,8,10];
    const arr3=[2,4,6,8,10];
    
    const arrCombined = arr1.concat(arr2,arr3)
    console.log(arrCombined);
    console.log("\n\n");

    // Pop Method

    let poppedElement=arr1.pop();
    console.log(arr1);
    console.log("Returned element from the array is:");
    console.log(poppedElement);
    console.log("\n\n");

    // Push Method
    console.log("Array before pushing custom values");
    console.log(arr1);
    arr1.push(9000,24242);
    console.log("Array After pushing custom values 9000, 24242");
    console.log(arr1);
    console.log("\n\n");
    

    // Array forEach method
    console.log("ForEach function to print sqaure of each elemetn present in the array");
    
    arr1.forEach(function (e){
        console.log(e*e);
    });

    console.log("\n\n");

    // Splice Method

    console.log("Splice Method to remove specific elements from an Array");
    let x = [1,2,3,4,5,6,7,8,9,10];
    console.log(`Array before any modification: ${x}`);

    x.splice(1,2,"Sourabh","Pranjal")
    //Above operation must delete consecutive 2 elements from the array after index 0  i.e "2,3" and insert "Sourabh","Pranjal" after 0 index;

    console.log(`Array after modification: ${x}`);
    console.log("\n\n");


    // to String Method

    let Arrx=[2,4,5,6];
    console.log("Array before conversion to string: ");
    console.log(Arrx);
    let str=Arrx.join(",");
    console.log("Array after conversion to string: ");
    console.log(str);
    console.log("\n\n");


    // Map Method
    // Double every element  of Array using Map

    let ArrayX=[1,2,3,4,5,6,7,8];

    let newArrayX=ArrayX.map(function (e){
        return e*2;
    });
    console.log("Orginal array");
    console.log(ArrayX);
    console.log("Modified array");
    console.log(newArrayX);


    

