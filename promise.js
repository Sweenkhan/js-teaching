// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// States of a Promise
// A promise has three possible states:

// Pending – The operation has not completed yet.
// Fulfilled – The operation was successful, and a value is available.
// Rejected – The operation failed, and an error is available.
// Creating a Promise
// A Promise is created using the Promise constructor, which takes a function with two parameters: resolve and reject.

 

const myPromise = new Promise((resolve, reject) => {
  let success = true; // Change to false to simulate rejection

  setTimeout(() => {
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Something went wrong.");
    }
  }, 2000);
});
// Handling a Promise
// To handle the result of a Promise, we use .then() for success and .catch() for errors.

 
myPromise
  .then(result => console.log(result)) // Runs if resolved
  .catch(error => console.error(error)) // Runs if rejected
  .finally(() => console.log("Promise completed.")); // Runs in both cases
// Chaining Promises
// You can chain multiple .then() blocks for sequential asynchronous operations.
 
 
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData
  .then(data => {
    console.log(data);
    return "Processing data...";
  })
  .then(processed => {
    console.log(processed);
  })
  .catch(error => console.error(error));
// Using async and await (Better Way)
// Instead of .then() and .catch(), you can use async and await for cleaner syntax.

 
async function handlePromise() {
  try {
    let result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Promise completed.");
  }
}



// handlePromise();

// creating promise
// let promise = new Promise((resolve, reject)=>{
//   let success = true;

//   setTimeout(()=>{
//       if(success){
//           resolve("your promise is completed")
//       } else {
//           reject("no it got rejected")
//       }
//   }, 2000)
// })


//  promise.then((result) => { 
//     console.log("yes", result) 
//  }).catch((error)=>{
//         console.log("ye hai error", error)
//  })


let promiseTwo = new Promise(function(resolve, reject){
         
  let profile = {name: "gaurav", age: 22, married: true}

  setTimeout(()=>{
    if(profile){
      resolve(profile)
    }else{
      reject("No we don't have any profile yet")
    }
  }, 2000)
})


promiseTwo.then((result)=>{
  console.log(result)
  
}).catch((error)=>{
     console.log(error)
})

 

let promiseThree = new Promise(function(resolve, reject){
         
  let profile = {name: "ankit", age: 22, married: false}

  setTimeout(()=>{
    if(profile){
      resolve(profile)
    }else{
      reject("No we don't have any profile yet")
    }
  }, 2000)
})


promiseThree.then((result)=>{ 
   return result.name
}).then((data)=>{
    console.log(data)
})
.catch((error)=>{
     console.log(error)
})


