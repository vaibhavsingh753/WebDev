console.log("this is printed form tute53.html");

// Let names has global scope
let names = "Vaibahv";
let names2 = "Harry";
let names3 = "Sagar";

// console.log(names + " is a good boy");
// console.log(names2 + " is a good boy");
// console.log(names3 + " is a good boy");

// function good_boys(name){
//     console.log(name + " is a good boy");
// }

// good_boys(names2);
// good_boys(names);
// good_boys(names3);

// function good_boys(name, text){
//     let names = "Names , scope is within the function, it is a local scope"
//     console.log(name + " is a good boy");
//     console.log(text + name);
// }

// let text1 = "good morning "
// good_boys(names2, text1);
// good_boys(names , text1);
// good_boys(names3 , text1);

//when we assing a value to the parameter as shown below it acts as the defauly value if that parameter is not passed
// function good_boys(name, text= "Good night "){
//     let names = "Names , scope is within the function, it is a local scope"
//     console.log(name + " is a good boy");
//     console.log(text + name);
// }

// let text1 = "good morning "
// good_boys(names2, text1);
// good_boys(names , text1);
// good_boys(names3);


// function sum(a, b, c){

//     let total = a+b+c;
//     return total;
//     // This line wont execute - unreachable code
//     console.log("nope");
// }
// let x = 1;
// let y =2;
// let z =3;

// let returnVal = sum(x,y,z);
// console.log(returnVal + " is the sum");

// let returnVal2 = sum(4, "str", 6);
// console.log(returnVal2);

//quizz

function comparison(a, b){
    if (a>b){
        return "The greater number is " + a
    }else if(b>a){
        return "The greater number is " + b
    }else{
        return "They are both equal"
    }
   
}

let x =46;
let y = 4;

console.log(comparison(x, y));