// Promises in JS

function fun1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function: Promise has been resolved");
        resolve();
      } else {
        console.log("Function: Promise not resolved");
        reject("Sorry promise not fulfilled");
      }
    }, 2000);
  });
}

fun1()
  .then(() => {
    console.log("Vaibhav: Thanks for resolving");
  })
  .catch((errors) => {
    console.log("Vaibhav: Bad bro couldnt resolve promise. Reason: " + errors);
  });

//   ---------------------------------------------------- prcactice ---

function fun2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let num = 98;
      if (num % 2 === 0) {
        console.log("the num is even");
        resolve();
      } else {
        console.log("the num is odd");
        reject(`Reson: ${num} is not even`);
      }
    }, 2000);
  });
}

fun2()
  .then(() => {
    console.log("the number is even as mod 2 gave zero");
  })
  .catch((error) => {
    console.log(`the promise was rejected, ${error}`);
  });
