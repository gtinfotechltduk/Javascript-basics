// Creating a Class in JavaScript
// Classes are declared using the class keyword. A class can have:

// A constructor method that is invoked when a new object is created.
// Methods that define the behavior of the object.
// Example: Creating a simple Person class

class Person {
    constructor(name, age) {
      this.name = name;  // 'this' refers to the object instance being created
      this.age = age;
    }
  
    // Method in the class
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating an instance of the Person class
  let person1 = new Person("Alice", 25);
  person1.greet();  // Output: Hello, my name is Alice and I am 25 years old.

  
//   Class Inheritance
// You can create subclasses that inherit properties and methods from a parent class using the extends keyword.

class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);  // Call the parent class constructor
      this.grade = grade;
    }
  
    // New method in the Student class
    study() {
      console.log(`${this.name} is studying.`);
    }
  }
  
  let student1 = new Student("Bob", 20, "A");
  student1.greet();  // Output: Hello, my name is Bob and I am 20 years old.
  student1.study();  // Output: Bob is studying.
  