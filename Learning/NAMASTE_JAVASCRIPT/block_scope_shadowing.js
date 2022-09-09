var a = 11; // if we have a same named variable outside the block , the variable inside the block
//shodows the global variable
let b = 99;
b = 55;
console.log("b", b);
{
  //block is aka compund statement
  //block is used to feed multiple statemenst when JS expects only one statement
  var a = 10;
  console.log(a); //returns 10
  let b = 23;
  const c = 34;
  console.log(b);
  console.log(c);
}
// console.log(b);
// console.log(c);
console.log(a); //returns 10
console.log(b);
