// JavaScript variables can belong to:

// The local scope or The global scope

// Global variables can be made local (private) with closures.

// Closures makes it possible for a function to have "private" variables.



let name = "sween"    //global variable

 
// function printName(){ 
//     let name = "khan"
//     console.log(name)
// }
// let count = 0



function printName2(){
    let count = 0
 
    function sum(){
        count += 1
    }
    sum()
    return count
}

let data = printName2()



function printName3(){ 
    let count = 0
    return function(){
          count += 1
          return count
    }
}


let data2 = printName3()

console.log(data2())
console.log(data2())
console.log(data2())
console.log(data2())
 
