// Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);
console.log("Length:", fruits.length);
console.log("First Fruit in Fruits:", fruits[0]);
console.log("Last Fruit in Fruits:", fruits[fruits.length - 1]);
// Methods:
// .push(): add an element at the end of the array
fruits.push("Avocado");
console.log("Fruits:", fruits);
// .pop(): delete an element at the end of the array
fruits.pop();
console.log("Fruits:", fruits);
// Update Elements
fruits[2] = "Orange";
console.log("Fruits:", fruits);
// Searching Elements
// .includes(element): check if an element exist (case-sensitive)
// Return: true or false
console.log("Is Banana included?", fruits.includes("Banana"));
// .forEach(): accept a function that will be executed to each element of the array.
fruits.forEach(function (fruit) {
    console.log("Fruit:", fruit);
  });