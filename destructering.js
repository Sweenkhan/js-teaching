let courseDetail = {feesOfCorse: 2400, durationForCorse: "6 months", teacherName: "sween"};


// let fees = courseDetail.fees
// let duration = courseDetail.duration
// let teacher = courseDetail.teacher


let { teacherName  ,feesOfCorse} = courseDetail
let {durationForCorse : duration} = courseDetail

let {} = courseDetail

// console.log(fees, duration, teacher)
console.log(feesOfCorse)
console.log(duration)

// []  square bracket
// {}  curly bracket or curly braces
// ()  parenthsis
// ``  backtickes
// -   hifen
// !   not   



let fruits = ["apple", "banana", "orange", "kiwi"]

let [a2,,b1] = fruits

console.log(a2, b1)