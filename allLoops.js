// 1️⃣ while Loop
// Concept: Runs while a condition is true.

let count = 0;
while (count < 5) {
  console.log("Count is: " + count);
  count++;
}

// 🔑 Points to Cover:
// Entry-controlled loop (checks condition before entering). 
// May run 0 times if the condition is false.


// 2️⃣ do...while Loop
// Concept: Runs the loop body at least once, then checks the condition.

 
let i = 0;
do {
  console.log("Value is: " + i);
  i++;
} while (i < 5);
// 🔑 Points to Cover:

// Exit-controlled loop. 
// Always executes once, even if the condition is false.



// 3️⃣ forEach() (Array Method)
// Concept: Iterates over arrays using a callback function.

 
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit, index) {
  console.log(index + ": " + fruit);
});
// 🔑 Points to Cover:

// Only works with arrays.

// Doesn’t break/return early.

// Cleaner syntax for array operations.

// 4️⃣ for...of vs. for...in
// ✅ for...of – Best for arrays and iterables
 
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}


// ✅ for...in – Best for object properties
 
let car = { brand: "Toyota", year: 2020 };
for (let key in car) {
  console.log(key + ": " + car[key]);
}

 
