// getName(); // this gives output
// console.log(x); //gives undefied as we are accesssing it before initializing
// console.log(getName ); // this prints the entire function

var x = 7;

function getName() {
    console.log("Vaibhav");
}

getName();
console.log(x);
console.log(getName ); // this prints the entire function

//get name as arrow function , behaves just like annother variable so in memory creation it is allocated undefined
// var getName= () => console.log("Vaibhav");
