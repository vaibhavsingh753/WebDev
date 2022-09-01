const person6 = {
    talk(){
        setTimeout(function() {
            console.log("this " , this); // points to window obj as function() has no object, so defaults to window obj
        } , 1000)
    }
}
person6.talk();
//solution as per olden method
// const person6 = {
//     talk(){
//         var self = this.talk;
//         setTimeout(function() {
//             console.log("this using self " , self); // points to person6 obj as self = this; is defined before the function to
//         } , 1000)
//     }
// }
// person6.talk();

// arrow function solves this
const person7 = {
    talk(){
        setTimeout(() => {
            console.log("this " , this); // points to person7 object as its an arrow function
        } , 1000)
    }
}
person7.talk();