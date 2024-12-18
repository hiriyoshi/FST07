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
