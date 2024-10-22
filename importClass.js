// Importing a Class
// You can import the class in another file to use it.


// main.js (importing a class)
import { Person } from './person.js';  // Named import

let person1 = new Person("Charlie", 30);
person1.greet();  // Output: Hello, my name is Charlie and I am 30 years old.

// If you are using a default export, you don't need curly braces when importing:


// main.js (importing a default export)
import Person from './person.js';  // No curly braces for default import

let person2 = new Person("Dana", 28);
person1.greet();  // Output: Hello, my name is Dana and I am 28 years old


// Classes are templates for creating objects, using the class keyword.
// Inheritance allows one class to extend another using the extends keyword.
// Modules allow you to split your code into separate files:
// Use export to share variables, functions, or classes.
// Use import to bring them into other files.
// You can have named exports (many per file) or default exports (only one per file).
