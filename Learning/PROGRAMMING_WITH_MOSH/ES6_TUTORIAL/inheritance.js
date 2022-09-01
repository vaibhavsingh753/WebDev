class Person {
    constructor(name) {
      this.name = name;
    }
    walk() {
      console.log("Walks");
    }
  }

  //teachers must inerity thewalk method from person class so we extend and use super
  //inheritance is shown below
  class Teachers extends Person{
      constructor(name, subject){
        super(name); //this initializes the name property
        this.subject = subject;
      }
    teaches(){
        console.log('Teaches');
    }
  }

  const teacher = new Teachers("harry", "computers");
  teacher.walk();
  teacher.teaches();
  console.log(teacher.subject);