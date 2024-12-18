// Control Flow Structures
// 1. Conditional Statements
// if, else if, else
// {} - code block
// () - conditional block
let temperature = 35;
if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20) {
  // Range: 0 - 19
  console.log("It's cool outside.");
} else if (temperature >= 20 && temperature <= 29) {
  // Range: 20 - 29
  console.log("It's warm outside.");
} else {
  console.log("It's hot outside.");
}

// 2. Looping Statements
// Repeatedly execute a block of code until a specific condition is met.
// For Loop
for (let i = 1; i <= 3; i++) {
  console.log("For Loop Count:", i);
}
// For Loop
/*
  Components of a For Loop:
  1. Initialization Expression
  2. Condition Expression
  3. Increment/Decrement Expression
*/
for (let i = 1; i <= 3; i++) {
  console.log("For Loop Count:", i);
}
// i = 1 + 1 = 2 + 1 = 3 + 1 = 4

// While Loop
let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count);
  count++;
}
// count = 1 + 1 = 2 + 1 = 3 + 1 = 4
