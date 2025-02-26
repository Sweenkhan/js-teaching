let arr = [10, 20, 30, 40, 0, 25, 60];


 
// its returning you an array of value   = map
let mapResult =  arr.map((val, i)=>{  
    return  val + 10
})


//filter  => its returning you an array of value
let filterResult = arr.filter((val)=>{
    return val > 25 && val < 50
})


// reducer  => it gives you a single value of your array
let reduceResult = arr.reduce((prev, next) => {
    return prev+next
 })



console.log(filterResult)
// console.log(reduceResult)
 


 

