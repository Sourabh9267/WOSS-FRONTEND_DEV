
let n=1;


function print(n)
{
    if (n==100){
        return;
    }
    else{
        n=n+1;
        console.log(n);
        print(n);
    }
}

print(n)
