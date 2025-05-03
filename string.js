let name = "sween"
let name2 = 'sween'
let name3 = `sween khan`
let name4 = "rakesh"


console.log(name.length)
console.log(name2.slice(1, 2))       //w            giving you character from 1 to 2
console.log(name.substring(1,2))     //w            giving you character from 1 to 2
console.log(name2.includes("ee"))    //true         finding in string wheather character includes or not
console.log(name.indexOf("n"))       //4            finding in string first matching character's
console.log(name.charAt(3))          //e            finding in string, what character is on giving index


console.log(name.toUpperCase())                   //converting your string to uppercase
console.log(name.toLowerCase())                   //converting your string to lowercase


"foo bar foo".replace("foo", "baz");     // "baz bar foo"         //replacing the first matching value
"foo foo".replaceAll("foo", "bar");      // "bar bar"             //replacing all


 
// 🔹 Trimming
// trim() → Removes both ends
console.log("   rahul ".trim())


// trimStart() / trimEnd()






// You can loop over a string using:

js
Copy
Edit
for (let char of "Sween") {
  console.log(char);
}