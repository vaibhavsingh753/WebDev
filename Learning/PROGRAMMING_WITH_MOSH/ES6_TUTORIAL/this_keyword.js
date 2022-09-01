const person2 = {
    'name' : "Vaibhav",
    'age' : '23',
    'college' : 'msrit',
    walk : function(){
        console.log(this);
    },
    talk(){
        console.log(`${this.name} talks a lot`);
    }

};
//this key word in java script returns the reference to the current object hence below line returns the object
// person2.walk();

// belopw we are passing the function reference only
const walking = person2.walk;
console.log(walking);

//below will give undefined as we are passing the function itsef
// const walking = person2.walk();
// console.log(walking);
//so will the below line as there is no reference to the object //actually shows the window object , this will not be seen in the strict mode
// walk();
