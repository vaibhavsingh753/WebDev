console.log('Interaction - Alert, Prompt, Confirm' );

//Alert in in-browser using JS - dosent return anything
//so you cant do clg(alert)

//Vaibahvs'alert('This is an alert message');

// let userName = prompt("What is your name: ", "Guest");
// console.log(userName);
// //below line is used to inject the value of userName to the HTML tag with ID = "disp"
// document.getElementById("disp").innerHTML = "Hello " + userName

// let confirmName = confirm("Your name is " + userName + ". Pls confirm!")
// // console.log(confirmName);
// if(confirmName){
//     //When OK is clicked this is returned
//     console.log("Your name has been confirmed");
// }else{
//     //When Cancel is done 
//     console.log("Name not confiremd");
// }


//QUIZZ allow only 18+ to the site

let userAge = prompt("Pls enter your age in years: ");

if(userAge >= 18){
    console.log('You are allowed to the club');
}else
{
    console.log("Y55ou are not old enough to enter the club");
    let waitYears = 18- userAge;
    console.log("You need to wait for " + waitYears + " more years");
}
