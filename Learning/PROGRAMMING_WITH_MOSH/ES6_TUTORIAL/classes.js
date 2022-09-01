// const person1 = {
//   name: "Vaibhav",
//   // walk: function(){
//   //     console.log("Walks");
//   // }
// //   //es6 way
// walk() {
//     console.log("Walks");
//   }
// };
// const person2 ={
//     name : "Harry",
//     walk(){
//         console.log("Walks");
//     }
// }

class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("Walks");
  }
}

const person = new Person("Vaibhav");
const person2 = new Person("Harry");
console.log(person ," , " ,person2);

person.walk();
