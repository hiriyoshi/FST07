console.log("Hello World!");
// This is a single-line comment.
/* 
This is a 
multi-line
comment.
*/
// Variables = container
// let - mutable/changeable - block-scope
// var - mutable/changeable - global-scope
// const - unmutable/unchangeable - block-scope
let firstName = "Nicole";
console.log("Hello", firstName);
firstName = "John";
console.log("Hello", firstName);

var lastName = "Doe";
console.log("Lastname:", lastName);
lastName = "Smith";
console.log("Lastname:", lastName);

{
  var email = "johnsmith123@example.com";
  let username = "johnsmith30";
  console.log("Email:", email);
  console.log("Username:", username);
}
console.log("Email:", email);
// console.log("Username:", username); ReferenceError: username is not defined.
const birthday = "01-23-2000";
console.log("Birthday:", birthday);
// birthday = "01-25-2000"; TypeError: assignment to constant variable.
