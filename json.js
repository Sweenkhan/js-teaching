// What is JSON?

// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand


// JavaScript has a built in function for converting JSON strings into JavaScript objects:

// JSON.parse()

// JavaScript also has a built in function for converting an object into a JSON string:

// JSON.stringify()



let name = {"firstName":"John", "lastName":"Doe"}

let data = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
    }


    let nam2 = '"firstName":"John", "lastName":"Doe"'
  const parseObj = JSON.parse(nam2)  

 

