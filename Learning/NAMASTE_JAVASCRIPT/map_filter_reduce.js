// [].map() -----------------------------------------------------------------------------------
const arr = [5, 4, 3, 2, 1, 9];

//getting the double of each array value
function double(x) {
  return x * 2;
}

const output = arr.map(double);
console.log(output);

//getting the binary of each array value
function binary(decimal) {
  return decimal.toString(2);
}

const output2 = arr.map(binary);
console.log(output2);

//getting the triple of each array value (arrow function used)
const output3 = arr.map((x) => x * 3);
console.log(output3);

// [].filter -----------------------------------------------------------------------------------
//filter out odd values form arr


function isOdd(x) {
    return x % 2; //returns only if modulus returns true which is the case of off, for even mod will be zero
}
function isEven(y) {
    return y % 2 === 0; //returns only if modulus returns true which is the case of off, for even mod will be zero
}

const output4 = arr.filter(isOdd);
console.log(output4);
const output5 = arr.filter(isEven);
console.log(output5);


const output6 = arr.filter(function isGreater(y) {
    return y > 3 ; //returns values greater than 3 
});
console.log(output6);

// const output7 = arr.filter((y) => y > 3 ); //returns values greater than 3 // can use arrow function too

// [].reduce -----------------------------------------------------------------------------------
//sum of all elements in an array
const output8 = arr.reduce(function(acc, curr){
    acc += curr; // acc = acc+curr
    return acc;
}, 0)

console.log(output8); //15

//largest element is an array
const output9 = arr.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
    return max 
}, 0);

console.log(output9); //5