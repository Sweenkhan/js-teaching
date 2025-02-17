// 1. Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top
//    of their scope before code execution. 

// 2. It allows you to use variables and functions before they are declared in the code. However, it's important to note that only declarations are hoisted, not initializations or assignments. 
//    For variables declared with var, hoisting means the variable is declared at the top of its scope and initialized with undefined. If you try to access the variable before its actual declaration line, you will get undefined.

// 3. For variables declared with let and const, they are also hoisted, but they are not initialized. Accessing them before their declaration line will result in a ReferenceError, creating a "temporal dead zone" (TDZ). 

// 4. Function declarations are fully hoisted, meaning both the declaration and definition are moved to the top. This allows you to call a function before it is defined in the code. Function expressions, however, are not hoisted in the same way.



console.log(x); // Output: undefined
var x = 5;

console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
let y = 10;

myFunction(); // Output: "Hello"
function myFunction() {
  console.log("Hello");
}

//myExpression(); // Output: ReferenceError: Cannot access 'myExpression' before initialization
const myExpression = function() {
  console.log("World");
};