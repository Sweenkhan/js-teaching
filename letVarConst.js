// 🔁 var vs let vs const

// Feature	 var	                           let                             	const
// Scope	Function-scoped	                   Block-scoped {}                 	Block-scoped {}
// Hoisting	✅ Yes (initialized as undefined) ✅ Yes (but not initialized) 	✅ Yes (but not initialized)
// Redeclaration  ✅ Allowed in same scope	 ❌ Not allowed              	❌ Not allowed
// Reassignment	✅ Allowed	✅ Allowed	    ❌ Not allowed                  (value is constant)
// Use Case	Legacy (avoid using it)	         Use for variables that may change	Use for constants or final values

// 🔍 Examples
// 1. Scope
 
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10 — var is function-scoped
}

function testLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ❌ ReferenceError — let is block-scoped
}


// 2. Hoisting

console.log(a); // ✅ undefined
var a = 5;

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10;


// 3. Redeclaration
var c = 1;
var c = 2; // ✅ Allowed

let d = 1;
// let d = 2; // ❌ SyntaxError: Identifier 'd' has already been declared


// 4. Reassignment
const e = 100;
e = 200; // ❌ TypeError: Assignment to constant variable
// ⚠️ Note: const prevents reassignment of the variable, not the contents if it’s an object or array.


 
const obj = { name: "Sween" };
obj.name = "Khan"; // ✅ Allowed (object content is mutable)
// ✅ Best Practices
// ✅ Use let for variables that will change (e.g., loops, input).

// ✅ Use const for variables that shouldn’t change.

// ❌ Avoid using var unless maintaining legacy code.

