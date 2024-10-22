// Loops in JavaScript
// Loops allow you to repeatedly execute a block of code as long as a specified condition is true. JavaScript has several types of loops: for, while, and do...while.

// For Loop
// The for loop is commonly used when you know how many times you want to loop over a block of code.
for (let i = 0; i < 5; i++) {
    console.log(i);  // Output: 0, 1, 2, 3, 4
  }

  
//For...of Loop
//The for...of loop is useful for iterating over arrays and other iterable objects.

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);  // Output: Apple, Banana, Mango
}


//While Loop
//The while loop executes as long as the condition is true.

let i = 0;

while (i < 5) {
  console.log(i);  // Output: 0, 1, 2, 3, 4
  i++;
}


// Do...While Loop
// The do...while loop is similar to while, but it ensures the loop runs at least once, even if the condition is initially false.
let j = 0;

do {
  console.log(j);  // Output: 0, 1, 2, 3, 4
  j++;
} while (j < 5);

