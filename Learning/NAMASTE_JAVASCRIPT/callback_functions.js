// what is callback function in JS?
// setTimeout(function(){
//     console.log("timer");
// }, 5000);

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// });;

//click me button
// document.getElementByID("clickMe").addEventListner('click', function xyz(){
//     console.log('BUTTON CLICKED');

// });
// if (typeof window !== 'undefined') {
//     console.log('You are on the browser')
//   } else {
//     console.log('You are on the server')
//   }

function buttonClicking(){
let count = 0;
document.getElementById("clickMe").addEventListener('click' , function crt(){
    console.log("Button Clicked" ,++count);
})

}

buttonClicking();