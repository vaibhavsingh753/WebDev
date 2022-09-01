
// var -> function (scope)----------------------------------------------------------------
function sayHelloVar(){
    for(var i= 0; i<5; i++){
        console.log(i);
    }

    console.log("last iteration " + i);
}
sayHelloVar();
// let -> block (scope)  ------------------------------------------------------------
function sayHelloLet(){
    for(let i= 0; i<5; i++){
        console.log(i);
    }
    //this line below will throw error when let is used
    // console.log("last iteration " + i);
}
let y = 3;
y=2
console.log("reassignmnet of let variable, y is done to " + y + " from y=3");
sayHelloLet();
// const -> block (scope) , cant be reassigned--------------------------------------------------------
const x = 2;
// below line will throw error
// x = 3;