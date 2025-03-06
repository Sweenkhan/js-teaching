// let student = { 
//     name: "rahul",
//     age: 24,
//     mobile: 7995900567
// }

// let studen2 = { 
//     name: "rakesh",
//     age: 26,
//     mobile: 7995900568
// }

// let student3 = new Object() 
// let studen5 = {}

// student3.name = "ranjit"
// console.log(student3.name)



// In JavaScript, a constructor is a special method inside a class that initializes new objects.
//  It is called automatically when a new instance of the class is created using the new keyword.

// notes:
// The constructor method has the same name constructor().
// It is called automatically when an object is created.
// It initializes the object’s properties (this.name, this.age).
// A class can have only one constructor.

class Student {
    constructor(name="angel", age= 23, mobile= 9876543210){
        this.name = name,
        this.age = age,
        this.mobile = mobile
    }

    display(){
        return `the name of new student is ${this.name}`
    }

    nameCapital(){
        return this.name.toUpperCase()
    }
}

let studentOne = new Student("rohit", 37, 85785858)
let studentTwo = new Student("lucky", 33, 85775785)


// console.log(studentOne.display())
// console.log(studentOne.nameCapital())

// console.log(studentTwo)



class Teacher extends Student{
    constructor(name, age, mobile, teacherName= "sir Jadeja"){
         super(name)
         this.age = age,
         this.mobile = mobile,
         this.teacherName = teacherName
    }
}


let teacher = new Teacher("vikas", 22, 988688658868 )

console.log(teacher)