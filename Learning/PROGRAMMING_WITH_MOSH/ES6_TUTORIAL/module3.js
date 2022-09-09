import Teachers, {  promote } from "./module2.js";

// Default imports -> import ... form ''; 
// default exports -> add the default key word after export and before class
// Named imports -> import {...} form '';
const teacher = new Teachers("harry", "computers");
teacher.walk();
teacher.teaches();
console.log(teacher.subject);

console.log(teacher.name);