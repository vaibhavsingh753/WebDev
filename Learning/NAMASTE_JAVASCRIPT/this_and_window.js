var a =10;
function glo(){
    var x = 34;
    console.log(x);
}
glo();
// console.log(window.a); //in chrome console i shows 10
// console.log(this.a); //in chrome console i shows 10
console.log(a);
// console.log(x);