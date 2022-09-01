//Nested functions and their scope---------------------------
// let a = 10;
// let d = 40;

// function outer(){
//     let b = 20;
//     function inner(){
//         let c = 30;
//         console.log(a,b,c,d);

//     }
//     inner()
// }
// outer()

//Closure-----------------------------------
// function outer(){
//     let counter = 0;
//     function inner(){
//         counter ++;
//         console.log(counter);
//     }
//     return inner;
// }
// //
// // if instead of freturn inner we did inner() and call outer() twice both will be returning 1,
// // as for each call the counter is reset as it s not saved in persistant memory, only temp memory
// // outer();
// // outer()
// //func remembers that the counter value is one so wehn its called again one is incremented to give 2
// const func = outer();
// func();
// func();

//Function Currying------------------------------------------
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(1,2,3));

// //f(a,b,c) => f(a)(b)(c)
// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c);
//             }
//         }
//     }
// }

// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3));

// //alternately below can also be done
// const add1 = curriedSum(1);
// const add2 = add1(2);
// const add3 = add2(3);
// console.log(add3);

//this key word in java - value depends on how function is called---------------------------------
// function sayMyname(myName){
//     console.log("My name is " + myName);
// }

// sayMyname("Vaibhav");
// sayMyname("Nihal");
//Implicit binding example
// const person = {
//     myName: "Vaibhav",
//     sayMyname(myName){
//            console.log("My name is " + this.myName);}
// }

// // console.log(person.myName);
// person.sayMyname();

// // Explicit binding example
// function sayMyname(myName){
//     console.log("My name is " + this.myName);
// }

// sayMyname.call(person);

//New binding
// function sayMyname1(myName){
//     console.log("My name is " + myName);
// }
// function newPerson(name, age){
//     // this = {name: " "}
//     this.name = name;
//     this.age = age;
// }

// const p1 = new newPerson("Vaibahv")
// console.log(p1);
// console.log(p1.name);
// sayMyname1(p1.name);

// const  p2 = new newPerson("ade", 34);
// console.log(p2);
// console.log(p2.age);
// sayMyname1(p2.age);

//Defaut Binding
// globalThis.myName2 = "Ade"; // Global scope variable
// function sayMyname2(myName2){
//     console.log("My name is " + this.myName2);
// }
// sayMyname2();

///Protype in JS-----------------------------------------------------------------
// function person(fName, lName){
//     this.fName = fName;
//     this.lName = lName;
// }

// const p1 = new person("Vaibhav" , "Singh");
// const p2 = new person("Harry" , "Potter");

// p1.getFullName = function(){
//     return this.fName+ " " + this.lName;
// }
// p2.getFullName = function(){
//     return this.fName+ " " + this.lName;
// }
//prototype property usage - now we dont have to create seperate
//function for each person getFullName
//function used with key word is called a constuctor function
//inheritence is producrd in JS through prototype
// person.prototype.getFullName = function(){
//     return this.fName+ " " + this.lName;
// }

// function superHero(fName, lName){
//     //this = {}
//     person.call(this, fName, lName)
//     this.isSuperHero = true;
// }
// superHero.prototype.fightCrime = function(){
//     console.log("Fighting crime");
// }
// superHero.prototype = Object.create(person.prototype)

// console.log(p1.getFullName());
// console.log(p2.getFullName());

// const batman = new superHero("Bruce", "Wayne");
// superHero.prototype.constructor = superHero;
// console.log(batman.getFullName());

//Classes in JS --------------------------------------------------------

// class Person {
//   constructor(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
//   }
//   sayMyName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const classP1 = new Person("Vaibhav", "Singh");
// console.log(classP1.sayMyName());

// class superHero extends Person {
//   constructor(fName, lName) {
//     super(fName, lName);
//     this.isHero = true;
//   }
//   fightCrime() {
//     console.log("Fighting Crime");
//   }
// }

// const p2 = new superHero("Bat" , "man");
// console.log(p2.sayMyName());

//Iterators and Iterables -------------------------------------------------------------------
//Below Iterator protocol is used to create an Iterators , 
//JS does it internally or string , arrays, maps and sets(these are iteratables)
// const obj = {
//   [Symbol.iterator]: function () {
//     let step = 0;
//     const iterator = {
//         next: function(){
//             step ++;
//             if(step ==1){
//                 return{value: "Hello", done: false}
//             }else if(step ==2){
//                 return{value: "World", done: false}
//             }
//             return {value: undefined, done: true}
//         },
//         }
//         return iterator;
//     }
//   }

// for(const word of obj){
//     console.log(word);
// }
// Using Generators to create an Iterator with simplicity ---------------------------------------------------- 
function normalFunction(){
    console.log("Hello");
    console.log("World");
}

// normalFunction()
// normalFunction()
//Star * is used to denote a special function , its a function that can stop mid-way and continue (pause execution)
//normal functions stopp only when all executions are complete or returned
function* generatorFunction(){
    yield 'Hello';
    yield 'World'
}
//This generatorObj is an Iterator created by the generator function
const generatorObj = generatorFunction();
for(const word of generatorObj){
    console.log(word);
}