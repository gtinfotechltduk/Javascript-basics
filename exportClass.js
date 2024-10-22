//Exporting a Class
//To share the Person class with other files, we can use the export keyword.

// person.js (exporting a class)
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  export { Person };  // Export the Person class
  
//   default export a single class or function:
  // person.js (default export)


  