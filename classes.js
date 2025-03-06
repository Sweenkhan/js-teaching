// In JavaScript, a constructor is a special method inside a class that initializes new objects.
//  It is called automatically when a new instance of the class is created using the new keyword.

notes:
// The constructor method has the same name constructor().
// It is called automatically when an object is created.
// It initializes the object’s properties (this.name, this.age).
// A class can have only one constructor.










class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
  
    display() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // Creating an object of the class
  const person1 = new Person("John", 25);
  person1.display(); 
  

//   const car1 = new Car("Toyota", "Corolla");
// const car2 = new Car("Tesla", "Model S");






// Using Constructor with Default Values
// You can provide default values in the constructor:

 
class Product {
  constructor(name = "Unknown", price = 0) {
    this.name = name;
    this.price = price;
  }

  details() {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  }
}

const p1 = new Product("Laptop", 800);
const p2 = new Product(); // Uses default values

p1.details();  
p2.details();  





class Parent {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Child extends Parent {
    constructor(name, age) {
      super(name); // Calls Parent's constructor
      this.age = age;
    }
  
    show() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  const c = new Child("Alice", 10);
  c.show(); // Output: Name: Alice, Age: 10