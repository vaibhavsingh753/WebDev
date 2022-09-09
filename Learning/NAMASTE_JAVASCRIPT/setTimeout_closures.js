// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     } ,3000);
//     //this will be printed first , then wait 3s to print i
//     console.log("Vaibhav");
// }
// x();

// print 1 to 5 with interval of 1s between each print
// function x() {
//   // var i = 1; //var will cauese 6 to porint 5 times , use let to fix - let creates a new memory location for
//   //each iteration of i
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Vaibhav");
// }
// x();

function y() {
  //solution using var , er enclose the setTimeout in annother function and then call it , 
  //since var has funcion scope each time clsoe is called the increemented value of i will be saved in new mempry location
  for (let i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("Vaibhav");
}
y();
