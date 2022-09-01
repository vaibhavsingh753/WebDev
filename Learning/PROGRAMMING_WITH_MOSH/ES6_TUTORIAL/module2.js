import { Person } from "./modules" ; // import Person class form modules.js file - this is a module

export function promote() {};

export default class Teachers extends Person {
  constructor(name, subject) {
    super(name); //this initializes the name property
    this.subject = subject;
  }
  teaches() {
    console.log("Teaches");
  }
}


const teacher = new Teachers("harry", "computers");
teacher.walk();
teacher.teaches();
console.log(teacher.subject);