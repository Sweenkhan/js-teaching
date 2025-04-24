let age = 25;
let yourAge = "25"
let married = false
let job;                             //console.log(typeof job)    =>  undefined
let jobProfile = null;               //console.leg(typeof jobProfile)   => object
let nums = 8858545n                  // console.log(typeof nums)  => bigint

 
let numberToString = String(age)     // console.log(typeof(numberToString))   // string 
let stringToNumber = Number(yourAge)    // console.log(typeof stringToNumber)    // number
let booleanToNumber = Number(married)   // console.log(typeof booleanToNumber)   //boolean     Number(true) => 1;   Number(false) => 0


 
// numbers conversion in js
//  console.log("1" + 2)       // 12
//  console.log(1+ "2")        // 12
//  console.log("1" + 2 + 2)   //122
//  console.log(1 + 2 + "2")   // 32




// Numbers()      //result

// "35"  => number
// "35gh"  => Nan
// " "     => 0
// true    => 1
//false    => 0
//undefined => Nan
//null     => 0




//Boolean()      //result

//1            => true
//0            => false
//""           => false
//"rajesh"     => truec
//null         => false
//undefined    => true

let data = undefined
let modifyDaya = Boolean(data)
console.log(modifyDaya)