const person3 = {
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

person3.walk()
//function binding - the value of this here will be the value of this in person
const walking2 = person3.walk.bind(person3);
// console.log(walking2);
//we see the person object wehn we do below line same as person3.walk()
walking2();
// will returns bound walk
console.log(walking2.name);
// console.log(person3.name);
