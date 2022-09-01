// console.log("Hello form main.js");

// // let sum = 9;
// // sum =10;
// // console.log(sum);

// // const b = "343";
// // console.log(b);

// //Primitive data type - string
// const name = "Vaibhav";
// const channel = `codevolulution`;
// const lastName = "singh";
// //Primitive data type - number
// const num = 12;
// //Primitive data type - boolean
// const bool = false;
// ////Primitive data type - undefined
// let result;
// console.log(result);
// const res = undefined;
// //Primitive data type - null
// const data = null;
// //Primitive data type - BigInt - recent addition, used to denote integer value larger thann number can hold
// //Primitive data type - symbol - denotes a value thats unique and un-changeable.
// //Non-Primitive data type - Object
// const person = {
//   name: "Vaibhav",
//   age: 25,
//   lastName: "singh",
//   nulls: null,
// };
// //Accessing name
// console.log(person.name);
// console.log(person[1]);
// //Non-Primitive data type - Arrays object
// const oddNumbers = [1,3,5,7,9,11];
// console.log(oddNumbers[4]);

//Operators in JavaScript
//assignment operator
// let x = 10;
// let y = 5;
// //arithmatic operator
// console.log(x/y);
// console.log(x+y);
// console.log(++x);
// //comparison
// console.log(x==y);
// console.log(x>y);
// console.log(x!=y);
// //logical operator
// let isValidNumber = x > 8 && 8>y;
// console.log(isValidNumber);
// isValidNumber = x > 20 || 8>y;
// console.log(isValidNumber);
// //String operator
// console.log("vaibhav" + "singh");
// //Teernary operator === - returns value based on condition
// const isEven = 10 % 2 === 0? true:false; //if 10/2 remainder is zero then true else false
// console.log(isEven);
// const isEven2 = 10 % 2 === 0? "Number is even":"number is false"; //if 10/2 remainder is zero then true else false
// console.log(isEven2);

//Types conversions
//Implicit -type conversion performed internally by Java
// console.log(true + "3"); //true3
// console.log("3" + "2"); //32
// console.log("3" - "2"); //1
// console.log(2 + "3"); //23
// console.log("2" * 4); //2*4 = 8
// console.log("3" * "2"); //2*3=6
// console.log("name"/2); //NaN  - not a number
// console.log("name" - "me"); //NaN  - not a number
// console.log('4'/"2"); //2
// console.log(4/"2"); //2
// console.log(undefined - 3); //NaN

//Implicit -type conversion performed manually by coder
//String to number
// console.log(Number("66")); //66
// console.log(parseInt("43")); //43
// console.log(parseInt("43.66")); //43
// console.log(parseFloat("5.55")); //5.55

//Datatypes to string
// console.log(String(true));
// console.log(String(3));
// console.log(String(undefined));
// console.log((5500).toString());
// console.log(Boolean(33)); // True
// console.log(Boolean(null)); //null, undefined, 0, "", NaN return false , everything else gives  true

// // Equality
// const var1 = 'test';
// const var2 = 'test';

// console.log(var1 == var2);
// // since both constants are of the same type it returns true
// console.log(var1 === var2);

// const var10 = 10;
// const var20 = '10';

// console.log(var10 == var20);
// // since both constants are not of the same type it returns false
// console.log(var10 === var20);

// const var100 = 0;
// const var200 = ' ';
// // returns true as both are treated as equal
// console.log(var100 == var200);
// // since both constants are not of the same type it returns false
// console.log(var100 === var200);

// //Conditional Statements
// const num = 0;
// if(num > 0){
//     console.log("number is positive");
// }else if(num <0){
//     console.log("Number is negative");
// }else{
//     console.log("num is Zero");
// }

// const color = "red";
// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "green":
//     console.log("color is green");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("Not a rgb color");
//     break

// }

//Loops
//for loop
// for(let i =1; i<=5; i++){
//     console.log("iteration number ", i  );
// }

//While loop
// let i = 1;
// while(i <= 5){
//     console.log("iteration number- ", i );
//     i++;
// }

//do-while loop
// let i =1;
// do{
//     console.log("iteration number: ", i);
//     i++;
// }while(i <=5);

//For-of loop - diffent types same result
// let array1 = [1,2,3,4,5,6,7,8,9];
// for(indeex in array1){
//     console.log(`THe values stored in array1 are ${array1[indeex]}` );
// }

// for(const num of array1){
//     console.log(`THe values stored in array1 are: ${num}` );
// }

// array1.forEach(function f(element){
//     console.log(`THe values stored in array1 are: ${element}`);
// });

//Functions in JS

// function greet(username){
//     console.log("good morning " + username);
// }
// let names = ["vaibhav", "harry", "rohan", "wayne"];
// names.forEach(function f(elements){
//     greet(elements);
// });

//return values
// function add(a, b){
//     return a+b;
// }
// console.log(add(3,5));

//Arrow function for add
// const arrowSum = (a,b) =>{
//     return a+b;
// }
// console.log(arrowSum(3,5));
// //aboce can be written as
// const arrowSum2 = (a,b) => a+b;
// console.log(arrowSum2(3,5));

//we can ommit the (, ) if there is only one paramenter
// const addFive = (num) => num + 5;
// console.log(addFive(7));

//Scope in JS
//Variable scope - applies to const and let
// if(true){
//     const b = 6
//     console.log(b);
// }
// // console.log(b);

// //function scope
// function testFun(){
//     const b = "54";
//     console.log(b);
// }
// testFun();
// console.log(b);

//Global scope variable - has value throught the code
//globally scoped var dosent override the local vars inside a block
const mynum = 45;
if(true){
    console.log(mynum);
}
// console.log(b);

function testFun(){
    console.log(mynum);
}
testFun();

