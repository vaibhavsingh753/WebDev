//Function statement
function a(){
    console.log("a called");
}
a();

//Function Expression - assigned to variable and not hoisted , need not have a function name
const summer1 = function (a,b) {
    return a+b;
}
console.log(summer1(1,3));

//Function Declaration same as function statement

//Anonymous Function - function wihout a name
const hi = function ( ){
    console.log("Hi");
}
hi();

//Named Function Expression - a function expression with namew
const summer2 = function sum(a,b) {
    return a+b;
}
console.log(summer2(5,3));
//Parameters vs Arguments
//First class functions - ability to use functions as values - eg as arguments , rerutnign fomr annother function
//Arrow functions
const diff = (a,b) => a-b;
console.log(diff(5,4)); 

