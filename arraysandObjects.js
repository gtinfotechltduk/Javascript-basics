// Arrays
// Arrays are used to store multiple values in a single variable.


let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);  // Output: "Apple"



// You can loop through arrays:

fruits.forEach(function(fruit) {
    console.log(fruit);
  });
  

//   Objects
//   Objects are collections of key-value pairs.

  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  console.log(person.firstName);  // Output: "John"
  


//   Creating Arrays
// Arrays can be created using square brackets [] or the Array constructor.



// Using square brackets
let fruits1 = ["Apple", "Banana", "Mango"];

// Using Array constructor
let numbers = new Array(10, 20, 30);


console.log(fruits[0]);  // Output: Apple
console.log(fruits[2]);  // Output: Mango


fruits[1] = "Orange";
console.log(fruits);  // Output: ["Apple", "Orange", "Mango"]



// Common Array Methods
// push(): Adds an element to the end of the array.
// pop(): Removes the last element.
// shift(): Removes the first element.
// unshift(): Adds an element to the beginning.
// length: Returns the number of elements.

fruits.push("Grapes");
console.log(fruits);  // Output: ["Apple", "Orange", "Mango", "Grapes"]

fruits.pop();
console.log(fruits);  // Output: ["Apple", "Orange", "Mango"]

console.log(fruits.length);  // Output: 3
