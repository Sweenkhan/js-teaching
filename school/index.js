import studentData from "./data.js"
let students = document.querySelector(".students")



studentData.forEach(dt => {
        let div = document.createElement("div")
        students.appendChild(div).classList.add("student")
        div.style.border = "1px solid black"
        div.style.padding = "5px"


        for(let key in dt){
                let p = document.createElement("P")
                p.innerHTML = `${key} : ${dt[key]}`
                div.appendChild(p)
        }

});
 






 



 
 
 


 

 

