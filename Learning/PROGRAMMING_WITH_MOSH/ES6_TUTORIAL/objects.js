const person = {
    'name' : "Vaibhav",
    'age' : '23',
    'college' : 'msrit',
    walk : function(){
        console.log(this.name + " Enjoys walking");
    },
    talk(){
        console.log(`${this.name} talks a lot`);
    }

};

person.walk();
person.talk();
//re-assigning 
//we use this when we are not sure which key we may want to target, prevents hardcoding
const targetMember = 'name'
person[targetMember] = 'Harry';

//alternate - when we are sure of the key we want to target we se below
person.age = "34";
console.log(person.name);
console.log(person.age);
person.talk();
