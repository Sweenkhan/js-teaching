// Functions are the building blocks of JavaScript, enabling code reuse, modularity, and organization. Here's everything you need to know:

// 1. Function Declarations
// javascript
// function greet(name) {
//   return `Hello, ${name}!`;
// }
// console.log(greet("Alice")); // "Hello, Alice!"
// ✅ Hoisted: Can be called before declaration.
// ✅ Best for: General-purpose reusable functions.



// 2. Function Expressions
// javascript
// const greet = function(name) {
//   return `Hello, ${name}!`;
// };
// console.log(greet("Bob")); // "Hello, Bob!"
// ❌ Not hoisted: Must be defined before calling.
// ✅ Best for: Callbacks or conditional functions.

// 3. Arrow Functions (ES6)
// javascript
// const greet = (name) => `Hello, ${name}!`;
// console.log(greet("Charlie")); // "Hello, Charlie!"
// ✅ Shorter syntax: No function keyword.
// ❌ No this binding: Inherits from parent scope.
// ✅ Best for: Short callbacks and functional programming.

// 4. Parameters & Arguments
// javascript
// function add(a, b) {  // Parameters: a, b
//   return a + b;
// }
// add(3, 5); // Arguments: 3, 5
// 🔹 Default Parameters:

// javascript
// function greet(name = "Guest") {
//   return `Hello, ${name}!`;
// }
// greet(); // "Hello, Guest!"
// 🔹 Rest Parameters (variable arguments):

// javascript
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// sum(1, 2, 3); // 6
// 5. Return Statement
// Explicit return:

// javascript
// function square(x) {
//   return x * x;
// }
// Implicit return (arrow functions only):

// javascript
// const square = (x) => x * x;
// ⚠️ Gotcha: Arrow functions return objects incorrectly without ():

// javascript
// const getUser = () => ({ name: "Alice" }); // Correct
// 6. Higher-Order Functions (HOFs)
// Functions that take/return other functions:

// javascript
// // HOF that takes a function
// function repeat(n, action) {
//   for (let i = 0; i < n; i++) action(i);
// }
// repeat(3, console.log); // Logs 0, 1, 2

// // HOF that returns a function
// function multiplyBy(factor) {
//   return (number) => number * factor;
// }
// const double = multiplyBy(2);
// double(5); // 10
// 7. IIFE (Immediately Invoked Function Expression)
// javascript
// (function() {
//   console.log("Runs immediately!");
// })();
// ✅ Use case: Isolates scope (pre-ES6 modules).

// 8. Closures
// Functions that remember their lexical scope:

// javascript
// function createCounter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }
// const counter = createCounter();
// counter(); // 1
// counter(); // 2
// 🔹 Why useful? Data privacy, memoization, currying.

// 9. this Keyword
// Regular functions: this depends on how the function is called.

// Arrow functions: this is inherited from the parent scope.

// javascript
// const person = {
//   name: "Alice",
//   greet: function() { console.log(`Hi, ${this.name}!`); },
//   greetArrow: () => console.log(`Hi, ${this.name}!`) // ❌ this.name undefined
// };
// person.greet(); // "Hi, Alice!"
// 10. Function Methods
// call() / apply(): Invoke functions with a specific this value.

// javascript
// function introduce(greeting) {
//   console.log(`${greeting}, I'm ${this.name}`);
// }
// const user = { name: "Bob" };
// introduce.call(user, "Hello"); // "Hello, I'm Bob"
// bind(): Permanently sets this.

// javascript
// const boundGreet = introduce.bind(user);
// boundGreet("Hi"); // "Hi, I'm Bob"
// 11. Recursion
// Functions that call themselves:

// javascript
// function factorial(n) {
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }
// factorial(5); // 120
// ⚠️ Base case required to avoid infinite loops.

// 12. Generators (ES6)
// Functions that can pause/resume execution:

// javascript
// function* idGenerator() {
//   let id = 1;
//   while (true) yield id++;
// }
// const gen = idGenerator();
// gen.next().value; // 1
// gen.next().value; // 2
// ✅ Use case: Lazy evaluation, infinite sequences.

// 13. Async Functions (ES8)
// javascript
// async function fetchData() {
//   const res = await fetch("https://api.example.com");
//   const data = await res.json();
//   return data;
// }
// fetchData().then(console.log);
// ✅ Simplifies promises: No more .then() chains.

// 14. Function Composition
// Combining functions for cleaner code:

// javascript
// const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
// const add1 = x => x + 1;
// const double = x => x * 2;
// const transform = pipe(add1, double);
// transform(5); // 12
// 15. Common Pitfalls
// Forgetting return → Returns undefined.

// Arrow functions in object methods → this issues.

// Callback hell → Solve with promises/async-await.

// Mutable default parameters:

// javascript
// function addToCart(item, cart = []) { // ✅ Good
//   cart.push(item);
//   return cart;
// }
// Summary Table
// Concept	Syntax	Use Case
// Declaration	function fn() {}	General-purpose
// Expression	const fn = function() {}	Callbacks
// Arrow	const fn = () => {}	Short callbacks
// HOF	function fn(callback) {}	Abstraction
// Closure	function outer() { return function() {} }	Data privacy
// Async	async function fn() {}	Promises
// Key Takeaways
// Functions are first-class citizens (can be passed/returned).

// Choose the right type (declaration vs. arrow).

// Master this (use arrow functions or bind()).

// Use closures for stateful logic.

// Prefer async/await over callback hell.

// Would you like exercises or real-world examples? 🚀

