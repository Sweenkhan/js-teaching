// function declaration 
function welcome(){
    return "hello guys how are you"
}


function add(a, b){
  return a+b
}

function sub(c, d){
    return c - d
}


// function expression
let mul = function(a, b){
   return a * b
}


//fat arrow function 
let div = (a, b)=>{
      return a / b
}


function greet(name){
   return `hello ${name}, welcome to our resort.`
}

// console.log(greet("rahul"))


// console.log(welcome())
// console.log(add(20, 30))  // 50
// console.log(sub(40, 30))

// console.log(mul(50, 40))

// console.log(div(30, 5))
 

// this concept

let profile = {
    firstName: "rahul",
    lastName: "tahkur",
    age: 24,
    mobile: 978777776766,
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}

let n = 10.4
let val = 10

// console.log(Math.floor(n))   //10    it gives you value on the lower side
// console.log(Math.ceil(n))    //11    it gives you value on the higher side
// console.log(Math.round(n))      //10     round of your value
// console.log(val.toFixed(2))     //10.00  it gives you value with 0,



let random =  Math.floor(Math.random() * 100);

console.log(Math.floor(Math.random() * 100))