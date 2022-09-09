//global variable
// console.log(x); //undefined - hoisting
var x =1;
fn1();
fn2();
console.log(x);

function fn1(){
    //local variable
    var x =10;
    console.log(x);
}
function fn2(){
    var x =100;
    console.log(x);
}

// fn1();
// fn2();
