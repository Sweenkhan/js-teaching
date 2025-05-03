// 🔄 1. flat() – Flattens Nested Arrays
 
 
let arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); 
// [1, 2, 3, 4] — flattens one level

let arr2 = [1, 2, [3, [4, 5]]];
console.log(arr2.flat(2)); 
// [1, 2, 3, 4, 5] — flattens two levels

let arr3 = [1, [2, [3, [4]]]];
console.log(arr3.flat(Infinity)); 
// [1, 2, 3, 4] — fully flattens all levels
// 🔠 2. sort() – Sorts Elements (Mutates Original Array)
 
 

 
let names = ["Sween", "Ankit", "Rahul"];
console.log(names.sort());
// ["Ankit", "Rahul", "Sween"]
 
  
let nums = [10, 5, 100, 2];
console.log(nums.sort()); 
// [10, 100, 2, 5] — WRONG because sorted as strings
 
 
nums.sort((a, b) => a - b); 
// [2, 5, 10, 100] — Ascending

nums.sort((a, b) => b - a); 
// [100, 10, 5, 2] — Descending
// 🔁 3. reverse() – Reverses the Order (Mutates Array)
 
 
 
let items = [1, 2, 3];
console.log(items.reverse());
 
 

let numbers = [3, 1, 2];
numbers.sort((a, b) => a - b).reverse(); 
// [3, 2, 1]


// ⚠️ Notes:
// Both sort() and reverse() modify the original array.

// To avoid that, use .slice() to clone first:

 
let sorted = nums.slice().sort();
let reversed = nums.slice().reverse();
// Would you like some coding exercises or quizzes to help practice these methods?