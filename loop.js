// for loop.
// for loop syntax:  for(iteration, condition, inc){  return }

// let count = 1;
let arr1 = [2, 4, 1, 5, 7, 500, 9, 0, 13, 15 ]
let profile = {
    name: "rahul",
    age: 24,
    mobile: 978777776766
}
let result1 = []
 
let name = "rakesh"
// for(let i=0; i<= 10; i++){

//     if(arr1[i] % 2 == 0){
//         result1.push(arr1[i])
//     } 
// }



2. //for of.   iteration on existing array, string.

// for(let char of name){
//     console.log(char)
// }


3. // for in.   iteration on existing object
// for(let key in profile){

//     console.log( key + ":" + profile[key])
// }


4. // while loop.

let count = 10;
let cities = ["delhi", "agra", "bhopal", "nagpur", "hyderabad"]

while(count < cities.length){
    // if(cities[count] === "bhopal"){break}
    console.log(cities[count])
    
    count++; 
}


5. // Do while.    its work even your condition is false for the very first time. but one time only

let countes = 15;

do{
    console.log(countes)
   
    countes++
}while(countes < 15);






let arr = ["rahul", "ankit", "pranjul", "gaurav", "maya"];


// for(let i = 0; i < arr.length; i++){ 
//         console.log(arr[i]+1)
// }


// arr.forEach((name) => {
//      console.log("hello", name)
// })


// for of
//  for(let student of studentData){
         
//         for(let key in student){
//                 console.log(key+":"+" " + student[key])
//         }
//  }