console.log("Start");

setTimeout(function (){
    console.log("CallBack");
}, 5000);

console.log("End");

// to block the main thread we need program that runs for longet than 5s in setTimeout
//callBack would have happend immediately after this
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < (startDate + 10000)) {
    endDate = new Date().getTime(); 
}
console.log("While loop expires after 10s");