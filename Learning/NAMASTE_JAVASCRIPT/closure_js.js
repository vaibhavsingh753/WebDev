// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// function t() {
//   var b = 7;
//   function y() {
//     console.log(b);
//   }
//   b = 100;
//   return y;
//   // below is same as above nested function y() returning y;
//   // return function y(){
//   //     console.log(b);
//   // }
// }

// let z = t();
// console.log(z); //rerurns the entire function y;
// z(); // this will no return 100

// the whole code above is put inside a funcition z();
// function z() {
//     var c =22;
//   function t() {
//     var b = 7;
//     function y() {
//       console.log(b , c);
//     }
//     b = 100;
//     y();
//   }
//   t();
// }

// // let r = z();
// // console.log(r);
// // r();
// z();


// closures quetion
for(var i=0; i<3; i++){
    const log = () => {
        console.log(i);
    }
    //we see 3, 3 times because setTimeout dosent call log for 100ms , long after the 
    //for loop has iterated upto 3
    //The timeout function callbacks are all running well after the completion of the loop.
    //fix is to use let i = 0; if u still want to use setTImeout
    setTimeout(log, 100)
    
    // log(); //this will give 0,1,2
}

