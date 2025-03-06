Get  // reading file
POST // create a new user
PUT   // changing users all data
PATCH  // changing a single value
DELET  // deleting a user


// let header = {method: 'POST',
// headers: {
//   'Content-Type': 'application/json'
// }}


let header = {
    method: 'POST',
    headers: {
        'Cntent-Type': `application/json`
    }
}

let body = {name: "virat", age: 36, married: true}


fetch("http://randomuser.in", header, body) 
  .then((result) =>{
     return result.json()
})