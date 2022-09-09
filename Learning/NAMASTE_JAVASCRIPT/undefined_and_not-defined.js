// console.log(a);
// var a = 7; //logging this will give undefiend beofer this line is executed

// console.log(x); //will give not-defined as this x has not been allocated any memory in global execution context
var a;
a =20;
if(a===undefined){
    console.log("a is un-defined");
}else{
    console.log('a is not un-defined');
}