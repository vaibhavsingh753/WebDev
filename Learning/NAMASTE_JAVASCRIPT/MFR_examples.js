//consider an array of objects , each object has 3 peoperties, similar data got from APIS
const users = [
    {firstName: "Vaibhav", lastName: "Singh", age:26},
    {firstName: "Harry", lastName: "Potter", age:76},
    {firstName: "Akshay", lastName: "Saini", age:56},
    {firstName: "Rohan", lastName: "George", age:26},
];

//List the fullname of all the users  ==> ["Vaibhav Singh" , "Harry Potter" ,.....]
const fullName = users.map((x) => x.firstName + " " +x.lastName );
console.log(fullName);
//  ------------ OR -----------------------
// const fullName = users.map(userFullName);
// function userFullName(arry){
//     return arry.firstName + ' ' + arry.lastName
// }

//Find how many  count users have certain age  {26: 2, 56:1, 76;1}
const age26 = users.reduce(function (acc, curr) {
    if(acc[curr.age]){
        acc[curr.age]  = ++ acc[curr.age] 
    }else{
        acc[curr.age] = 1
    }
    return acc;
}, {})

console.log(age26);

// console.log(users[0].age);


//find out the first name of all the poele whos age is less than 30

// const age30 = users.filter(ageLess30);

// function ageLess30(arry){
//     if(arry.age < 30){
//         // console.log(arry.firstName);
//         console.log(arry.firstName);
//     }
// }

//below is an example of function chaining
const age30 = users.filter((x) => x.age<30).map((x) => x.firstName);
console.log(age30);


//same result with reduce
const age30reduce = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName)
    }
    return acc
    
},[])
console.log(age30reduce);
// ----------------or ------------------------------
const age30reduce2 = users.reduce((acc, curr) => curr.age<30 ? [...acc, curr.firstName] : acc,  [ ])
console.log(age30reduce2);