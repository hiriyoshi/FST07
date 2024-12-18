//Operators and Expression

let num1 = 10;
let num2 = 5;

// 1. Arithmetic Operators
console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);
console.log("Remainder of Division (Modulo) (%):", num1 % 6);
console.log("Exponent (**):", num1 ** num2);

// Order of Operations
// PEMDAS
// BODMAS
let answer = 3 + (4 * (5 - 2) ** 2) / 2;
console.log("Answer:", answer);

// 2. String Expressions or Concatenation
let greeting = "Hello";
let name = "John";
console.log("Greeting:" + " " + greeting + " " + name);

// 3. Comparison Operators
// type coercion: convert the data type if necessary
console.log("Equal to(==):", num1 == num2);
console.log("Equal to(==) with type coercion:", num1 == "10");

console.log("Not Equal to(!=):", num1 != num2);
console.log("Not Equal to(!=) with type coercion:", num1 != "10");

console.log("Strict Equal to(===):", num1 === num2);
console.log("Strict Equal to(===):", num1 === "10");

console.log("Strict Not Equal to(!==):", num1 !== num2);
console.log("Strict Not Equal to(!==) with type coercion:", num1 !== "10");

console.log("Greater than (>):", 5 > 3);
console.log("Less than (<):", 5 < 3);
console.log("Greater than or Equal to (>=):", 5 >= 3);
console.log("Less than or Equal to (<=):", 5 <= 3);
// 4. Logical Operators
// AND, OR, NOT
// && - AND
// || - OR
// ! - NOT
let sunny = true;
let warm = true;
console.log("Is it sunny AND warm?", sunny && warm);

// AND: true if all of the conditions are met, otherwise false
console.log("Is it sunny AND warm?", sunny && warm);
// OR: true if at least one condition is met, otherwise false
console.log("Is it sunny OR warm?", sunny || warm);
// NOT: invert the value of the boolean
console.log("NOT sunny.", !sunny);

// 5. Assignment Expressions
// (=): Assign a value to a variable
let num3 = 10;
let num4 = 5;
// Addition Assignment (+=)
// num3 = num3 + num4;
num3 += num4;
console.log("The new value of num3 is:", num3);

// Subtraction Assignment (-=)
num3 -= num4;
console.log("The new value of num3 is:", num3);
// Computation: 15 - 5 = 10

// Multiplication Assignment (*=)
num3 *= num4;
console.log("The new value of num3 is:", num3);
// Computation: 10 * 5 = 50
// Division Assignment (/=)
num3 /= num4;
console.log("The new value of num3 is:", num3);
// Computation: 10 / 5 = 10
