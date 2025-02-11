 
const dateOfBirth = "jan1999"
// let age = 24;
// age = 25
 

//    let coins = [1, 2, 3, [5,6,7,8,9, [49, 59, 69,79, 89, 99]], 40, 50];

let students = ["ram", "sham", "seeta"];
let address = [12, "first avenue", { mobile: 6787676 }]


// let coins = [1, 2, 3, [5, 6, 7, [49, 59, 69, 79, 89, 99]], 40, 50]; 
let notes = [10, 20, 30, 40, 50]
let newNotes = [100, 200, 500, 1000]

let coins = [1, 2, 3, [5, 6, 7, [49, 59, 69, 79, 89, 99]], 40, 50]; 

let flatArray = coins.flat(2)     // falting aray in one single array 
let mergeArray = [...notes, ...newNotes, 2000, 5000]    // spread operator: using for merge array


// console.log(mergeArray) 
// console.log(flatArray)

// add new value in last index
notes.push(60, 70)

// remove value from last index
let collectVal = notes.pop()
 

// to add value in front of array
notes.unshift(2, 5)


//to remove value from front in array
notes.shift()

// console.log(notes)

// console.log(coins[3][3][coins[3][3].length - 1]) 
// console.log(notes[notes.length - 1])

//  let coins = [1, 2, 3,     [5,6,7,    [49, 59, 69, 79, 89, 99]   ]        , 40, 50]; 
// let notes = [10,20,30]

// console.log(coins[3][3][coins[3][3].length - 1]) 
// console.log(notes[notes.length - 1])

//    let coinsLeftOver = coins.slice(0, 4)




//1. slice
//    console.log(coins.length)
//    console.log(coins.slice(3, 6))
//    console.log(coins.slice(3, coins.length))  //or   console.log(coins.slice(3, 7)) // first parmeter is initial number, second is before last number

//   console.log(coinsLeftOver)
//   console.log(coins)



// 2 splice method;  

// let modifiedArr = coins.splice(3, 2, 15)
let newStudents = students.splice(1, 1, "geeta")

// console.log(modifiedArr, coins)
// console.log(students);


// 3. split.
var name = "sween@khan@bhatt@husain" 
let splitArr = name.split(" ")    // convert string to an array

// let joinArr = splitArr.join(".")    // convert array to string 
// console.log(splitArr)
// console.log(joinArr)


// split(), slice(),splice(), join() 
// console.log(arr[2], arr[3])

 




// object.

let car = {}
// car.model = "swift"


let cars = new Object()

let profile = {
    firstnName: "virat",
    lastName: "kohli",
    age: 35,
    married: true, 
}

profile.mobile = 7898788877;     // adding new key and value in object;


// console.log(profile.age)    // 35 
// console.log(profile["firstnName"])    // virat


// update
profile.age = 36

 
// delete 
delete profile.mobile

// console.log(profile)



// let message = "Hello";  // String
// let num = 10;           // Number
// let isStudent = true;   // Boolean
// let score;              // Undefined
// let emptyValue = null;  // Null

// console.log(typeof message, typeof num, typeof isStudent);




//  Operators in JavaScript

// Arithmetic (+, -, *, /, %).
// Comparison (==, ===, !=, <, >).
// Logical (&&, ||, !).

 
// reminder.


// console.log(10 % 3 == 1)   // true

// console.log( 4 + 4 && 8)   // true.     : And operator 

// console.log( 4 + 4 || 9)   // true       : Or operator


// ternary operator :   (condition ? true : false)  
let gourav = 60;
let pranjul = 40;
 

let result = (gourav > 50 && pranjul > 50) ? "pass" :" fail";


// if else
let ageOfStudent = 60

// if(ageOfStudent >= 18 && ageOfStudent <=60 ){
//     console.log("you are eligible");
// } 
// else {
//     console.log("you are not eligible")
// }



// loops  : for loop, while loop, do while,  for in, for of, forEach,


// for loop syntax:  for(iteration, condition, inc){  return }

let count = 1;
// let arr1 = [2, 4, 1, 5, 7, 500, 9, 0, 13, 15 ]

let result1 = []
 
// for(let i=0; i<= 10; i++){

//     if(arr1[i] % 2 == 0){
//         result1.push(arr1[i])
//     } 

// }


 
// 3 fizz  
// 5 buzz
// 3 and 5 fizzBuzz

let fizzResult = []
// for(let i = 1; i < 50; i++){


//      if(i % 3 == 0 && i % 5 == 0){
//         fizzResult.push("fizzBuzz")
//     }  else if(i % 3 == 0){
//         fizzResult.push("fizz")
//     } else if(i % 5 == 0){
//         fizzResult.push("Buzz")
//     } 
//      else {
//         fizzResult.push(i)
//     }

// }

//  console.log(fizzResult)


let arr1 = [3, 4, 1, 5, 7, 500, 9, 0, 13, 15 ]
let maxNumber = arr1[0]
let minNumber = arr1[0]

for(let i = 1; i < arr1.length ; i++){

   if(maxNumber < arr1[i]){
      maxNumber = arr1[i] 
   } 

   if(minNumber > arr1[i]){
    minNumber = arr1[i]
   }

}

console.log(maxNumber, minNumber)

 





