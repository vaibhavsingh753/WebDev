// console.log("This is Aync/Await");

// async function vaibhav(){
//     console.log("Inside vaibhav Function");
//     const response = await fetch("https://api.github.com/users");
//     console.log("Before Resposne");
//     const users = await response.json();  //wait for response to be converted to JSON
//     console.log("users resolved ");

//     return users;

//     // return "Vaibhav";
// }

// console.log("Before calling vaibhav");
// let a = vaibhav();
// console.log("After calling vaibhav");
// console.log(a);
// a.then(data => console.log(data)); // clg data once the async function vaibhav() returns the promise as fulfilled
// console.log("Last line of JS file");


// ---------------------------------------------- exmaple 2 -----------------------------

function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log("making request to " , location);
        if(location === "google"){
            resolve("Google says HI")
        }else{
            reject("we can only say hi to google")
        }

    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log("processing response");
        resolve("Extra info + " +response);
        // reject("Extra info + " +response);

    })
}
// code using promises
// makeRequest("google").then( response => {
//     console.log("response recieved");
//     return processResponse(response)
// }).then(processResponse => {
//     console.log(processResponse);
// }).catch( err => {
//     console.log("error");
// })


// simplified with async/await


// async function doWork(){
//     try{
//         const responses = await makeRequest("goo0gle");
//         console.log("response recieved");
//         const processResponse = await processRequest(responses)
//         console.log(processResponse);
//     } catch(err){
//         console.log(err);
//     }
// }

// doWork();


