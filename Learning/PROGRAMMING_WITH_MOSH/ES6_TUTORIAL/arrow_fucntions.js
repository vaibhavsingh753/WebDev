//regular function
const square = function (number) {
  return number * number;
};
console.log(square(3));

//arrow function psot ES6
const arrowSquare = (number) => number * number;
console.log(arrowSquare(3));

//given an array below
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// if we want only the active jobs - normal function
const activeJobs = jobs.filter(function (job) {
  return job.isActive;  //returns all the jobs where isActive is true
});
console.log(activeJobs);

// if we want only the active jobs - arrow function
const activeJobs2 = jobs.filter(job2 => !job2.isActive); //returns all the jobs where isActive is false
console.log(activeJobs2);