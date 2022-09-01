// ////// normal function ---------------------------------------------------------------------
// console.log(this);
// //this refers to the onject that is currently calling the function
// var age = 28;
// function dispAge(){
//     console.log(this.age);
//     console.log(this);
// }
// //displas 28 and the window object
// // dispAge();
// // below aso gives same o/p
// // window.dispAge(); //this refers t-o the window object

// const person4 = {
//     age: 26,
//     dispAge: dispAge,
//     nestedPerson:{
//         age : 40,
//         dispAge: dispAge
//     }
// };
// //this refers to the object that is calling the function , here in person we are refrencing dispAge to 
// //dispAge function above so , now this willn ot display the window object but insted display the 
// //person object
// person4.dispAge();

// //now we are calling the nestedPerson object so the below line will give the nestedPerson object not the 
// //person onject
// person4.nestedPerson.dispAge();
// //below aslo shows same
// console.log(person4.nestedPerson); 

//// arrow function -------------------------------------------------------------------------
//this refers to the objec that defines the this
//below is normal function , greet2 will refrence window obj
// var person5 = {
//     age: 29,
//     greet1: function() {
//         console.log("greet1 " , this.age);
//         console.log("greet1 " , this); // this will refer to the person object
//         function greet2(){
//             console.log("greet2 " , this.age); // undef as window abject dosent have age property
//             console.log("greet2 " , this); //here this will refer to window object, as it is refering to greeet2 function 
//         }
//         greet2();
//     }
// }

// person5.greet1();
// below is arrow function for greet 2 , it refrences person5 object as that where this is defined
var person5 = {
    age: 29,
    greet1: function() {
        console.log("greet1 " , this.age);
        console.log("greet1 " , this); // this will refer to the person5 object
        const greet2 = () => {
            console.log("greet2 " , this.age);// this will aalso refer to the person5 object as its in an arrow function
            console.log("greet2 " , this);//this will refer to the person5 object
        }
        greet2();
    }
}
person5.greet1();

// now we are defining this in the global scope so the value of this.age will hold age 34 and 
// this will have window object
//global var
var age = 34;
const greet2 = () => {
    console.log("greet2 global" , this.age);// this will aalso refer to age 34 as its a global var
    console.log("greet2 global " , this);//this will refer to the window object
}
greet2();