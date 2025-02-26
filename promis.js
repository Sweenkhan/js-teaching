// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// States of a Promise
// A promise has three possible states:

// Pending – The operation has not completed yet.
// Fulfilled – The operation was successful, and a value is available.
// Rejected – The operation failed, and an error is available.
// Creating a Promise
// A Promise is created using the Promise constructor, which takes a function with two parameters: resolve and reject.



// const obj = new Object()
// const date = new Date()

 

 

// creating promise
// const firstPromise = new Promise((resolve, reject)=>{
   
//     let name;
//      setTimeout(() =>{
//        if(name){
//         resolve(name)
//        } else {
//         reject("No we dont have name yet")
//        }

//      }, 2000)
// });


// consuming promise
// firstPromise.then((result)=>{
//      console.log(result, ",yes its working")
// }).catch((error)=>{
//     console.log(error, "NOOOOOO")
// })



// creating another promise
let promise2 = new Promise(function(resolve, reject){

    // let profile;
    let profile = {name: "pranjul", age:21, mobile: 9876543210};
    setTimeout(() =>{
      if(profile){
       resolve(profile)
      } else {
       reject("No we dont have name yet")
      }

    }, 2000)
})


// consuming a promise

promise2.then((result)=>{
     console.log(result)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("promise has consumed")
})


// promise2
// .then((result)=>{
//      return result.name
// })
// .then((res) => {
//     let add = "name :"
//      return add+res
// })
// .then((res)=>{
//      console.log(res)
// })
// .catch((error)=>{
//     console.log(error)
// })


// async and await
 
async function fetching() {
    try {
        let result = await promise2
         console.log(result)

    }catch(error){
        console.log(error)
    }   
}

fetching()





