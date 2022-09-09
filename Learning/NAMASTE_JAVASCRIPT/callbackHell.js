// console.log("Vaibahv Singh");
// setTimeout(function(){
//     console.log("time out set to 3 s");
// }, 3000);
// console.log("Namaste JS");

//shopping site
const cart = ["shoes", "socks", "food", "pens"];

api.createCart( cart, function (){
    api.goToPayment(function (){
        api.goToWallet(function () {
            api.updateWalletBalance()
        })
    })
}
);
 //wehn a function is palced inside annother function and this keeps going on and on nthe code 
 //the code starts expanding horizontally not vertically