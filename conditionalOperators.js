// Conditional operators allow you to make decisions in your code based on whether a condition is true or false.

// if...else
// The if...else statement allows you to execute different blocks of code based on a condition.


let age = 18;

if (age >= 18) {
  console.log("You are an adult.");  // Output: You are an adult.
} else {
  console.log("You are a minor.");
}


// else if
// You can chain multiple conditions using else if
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");  // Output: Grade: C
} else {
  console.log("Grade: F");
}

// Ternary Operator
// The ternary operator is a shorthand for if...else and is useful for simple conditions.

let age1 = 20;
let message = (age1 >= 18) ? "You can vote." : "You cannot vote.";
console.log(message);  // Output: You can vote.

// Logical Operators
// Logical operators allow you to combine multiple conditions:

// && (AND): Both conditions must be true.
// || (OR): At least one condition must be true.
// ! (NOT): Inverts a condition.

let isAdult = (age >= 18) && (age < 65);  // Both must be true
let canVote = (age >= 18) || (age === 17);  // One must be true
let isNotAdult = !(age >= 18);  // Inverts the condition


// Switch Statement
// The switch statement is useful for comparing a variable against multiple values.

let color = "red";

switch (color) {
  case "red":
    console.log("The color is red.");
    break;
  case "blue":
    console.log("The color is blue.");
    break;
  default:
    console.log("Unknown color.");
}


// Combining Arrays, Loops, and Conditionals

// Here's an example that combines arrays, loops, and conditionals to solve a problem:

let numbers = [10, 20, 30, 40, 50];

// Sum the numbers in the array if they are greater than 20
let sum = 0;

for (let num of numbers) {
  if (num > 20) {
    sum += num;
  }
}

console.log("The sum is:", sum);  // Output: The sum is: 120

// Arrays allow you to store and manipulate lists of values.
// Loops (such as for, while, for...of) help iterate through arrays and repeat tasks.
// Conditional operators (if...else, ternary, logical operators) let you control the flow of your program based on conditions.
