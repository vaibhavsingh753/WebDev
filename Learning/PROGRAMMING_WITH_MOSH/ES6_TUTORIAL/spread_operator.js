const arry1 = [1,2,3];
const arry2 = [4,5,6];

// old method
const combined = arry1.concat(arry2);
console.log(combined);

//ES6 Spread operator is represented by 3 dots , "..."
const combinedSpread = [...arry1, ...arry2];
console.log(combinedSpread);

// its easire to add elements or other arrays in any order
const arry3 = [3.1, 3.2, 3.3];
const combi = [...arry1, ...arry3,1, ...arry2, "abcd"]
console.log(combi);

//clonig 
const arr1clone = [...arry1];
console.log(arr1clone);

//combining objects
const o1 = {name: "vaibhav"}
const o2 ={job: "Developer"}

const objCombi = {...o1, ...o2, location: 'India'}
console.log(objCombi); 

const objClone = {...o1}
console.log(objClone);