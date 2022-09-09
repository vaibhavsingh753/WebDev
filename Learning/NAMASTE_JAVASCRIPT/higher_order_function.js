//Higher order function is a function that takes an argument as a function
// function x(){
//     console.log("Vaibhav");
// }

// function y(x){
//     console.log("hifh");
//     x();
    
// }
// y(x);

//given radiuses of circle , frote function to calcualte the area for each
// const radius = [3, 1, 2, 4]
// radius.forEach(function f(element){
//     console.log(element);
// })

// function circleArea(radius){
//     radius.forEach(function f(element){
//         let pi = 3.14;
//         console.log(`The area of circle  is ` , element*pi*element );
    
// });
// }
// circleArea(radius)

// or------------

// function circleArea(radius){
//     for(let i = 0; i < radius.length; i++){
//         let pi = 3.14;
//         console.log(`The area of circle ${i+1} is ${radius[i]*pi*radius[i]} `);
//     }
// }
// circleArea(radius)

// or-----------------------------------CIRCLE  ------------------------------------------------------
// const radius = [3, 1, 2, 4]
// function circleArea(radius){
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(Math.PI *radius[i]*radius[i]);
//     }
//     return output;
// };

// console.log("Area",circleArea(radius));

// function circumference(radius){
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//     output.push(2* Math.PI*radius[i])
// }
//     return output;
// }

// console.log("Circumference",circumference(radius));

// function diameter(radius){
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//     output.push(2*radius[i])
// }
//     return output;
// }

// console.log("Diameter",diameter(radius));


//// better way to write this is below - using functional programming ////////////////////////////////////////////////////////

const radius = [3, 1, 2, 4]

const area = function (radius){
    return Math.PI*radius*radius;
}
const circumference = function (radius){
    return Math.PI*2*radius;
}
const diameter = function (radius){
    return 2*radius;
}
//function to do all the calaulations only the logic changes
const calculate = function(arr, logic){
    const output = [];
    for(let i = 0; i < radius.length; i++){
         output.push(logic(arr[i]))
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

//using map
console.log(radius.map(area)); // this doing the same function as calculate() provided by JS