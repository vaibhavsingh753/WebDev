let arr = ["vaibhav", "akshay", "harry", "mosh"];

let obj = {
  nation: "spain",
  name: "Vaibhav",
  city: "Bangalore",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

function fun() {
    this.website="Tools QA",
    this.language="Java Script"
}
//Obj inherits form Object.prototype
function Obj(givenName) {
  this.name = givenName;
}
//adding prototype o object we have created
Obj.prototype.getName = function () {
  return this.name;
}

Obj.prototype.setName = function (newName) {
  this.name = newName;
};
// obj.prototype.nation = 'India'
let obj3 = new Obj("ade");
console.log(obj3); //Obj { name: 'ade' }
console.log(obj3.getName()); //ade
obj3.setName("Harry bhai"); // obj 3npw has the name Harry bhai
console.log(obj3.name); //Harry bhai

let obj2 = new fun();
console.log(obj2);

fun.prototype.name = "Vaibhav Singh"
console.log(obj2.name); //Vaibhav Singh

console.log( `------------------------------------------------ eg2 -----------------------------`);
// ------------------------------------------------ eg2 -----------------------------

const proto = {
    slogna(){
        return `THis comapany rocks`
    },
    changeName: function(newName){
        this.name = newName
    }
}

// This creates vaibhav obj
// const vaibhav = Object.create(proto)
// vaibhav.name = "Vaibhav";
// vaibhav.role = "Developer"
// vaibhav.changeName("Vaibhav2")
// console.log(vaibhav);


//this too created vaibhav object
const vaibhav2 = Object.create(proto, {
    name: {value: "vaibhav", writable: true},
    role: {value: "developer"},
})
 
vaibhav2.changeName("Vaibhav2")
console.log(vaibhav2);
console.log( `------------------------------------------------ eg3 -----------------------------`);

function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

//slogan
Employee.prototype.slogan = function(){
    return `THis company rocks!! Regards, ${this.name}`
}

let vaibhavObj = new Employee("Vaibhav" , 555555555, 12)
console.log(vaibhavObj.slogan());

function Programmer(name , salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype``
Programmer.prototype = Object.create(Employee.prototype)
//Manually set the constructor
Programmer.prototype.constructor = Programmer;

let harry2 = new Programmer("Harry" , 3, 3, "JavaScript")
console.log(harry2);