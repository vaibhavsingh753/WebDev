console.log(b);//undefined
// console.log(a); //error - cannot acces 'a' before initializing
let a =10;
console.log(a); //prints 10
var b =100;
b =23; // now b hold 23

let x;
x= 67; //x holds 67
x= 44; // x hold 44, let can be updated in the scope but not redeclared
console.log(x);

// const y; // throws Type error , const has to be declare and initialized in the same line
// y =12; 

{
    let a =23;
    console.log(a); //block scope for let, here 'a' is 23
    
}

const c =12;
{
    const c =34;
    console.log(c); //block scope for const , here 'c' is 34
    const a = 45; 
    console.log(a); //block scope for const , here 'a' is 45
}
// const c = 34; //throws error as const can be redeclarred or updated 