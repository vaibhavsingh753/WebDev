const colors = ['red', 'green', 'blue'];
// colors.map(function(color){
//     return "<li>" + color + '</li>'
// });
//above rewritten as an arrow function
const items = colors.map(color =>`<li>${color}</li>`);
console.log(items); 