// Document Object Model (DOM)
// use javascript to change the content, structure, style of the website.
// .querySelector()
// Return: First Element or Null
// Pass: #id, .class, tag
let elementWithID = document.querySelector("#first-div");
console.log("Element with ID:", elementWithID);
elementWithID.textContent = "Div 1";
elementWithID.style.color = "tomato";
let elementWithClass = document.querySelector(".sample-div");
console.log("Element with Class:", elementWithClass);

// .querySelectorAll()
// Pass: #id, .class, tag
let elementsWithClass = document.querySelectorAll(".sample-div");
console.log("Elements with Class:", elementsWithClass);
elementsWithClass[1].textContent = "Div 2";
elementsWithClass[1].style.backgroundColor = "tomato";

let headings = document.querySelectorAll("h3");
console.log("Headings:", headings);

headings.forEach(function (heading) {
  heading.style.backgroundColor = "tomato";
  heading.style.color = "white";
});

// Updating Element Attributes
let dayNightIcon = document.querySelector("#day-night-icon");
dayNightIcon.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Appending New Elements
let parentElementDiv = document.querySelector("#parent-element");
let createdElementDiv = document.createElement("div");
createdElementDiv.textContent = "Child Element";
parentElementDiv.appendChild(createdElementDiv);

// Removing Elements
let elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

// Adding Event Listeners and Manipulating Element Styles
let darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
  let pageContainer = document.querySelector("#page-container");
  pageContainer.style.backgroundColor = "black";
  pageContainer.style.color = "white";
  let pageModeText = document.querySelector("#page-mode-text");
  pageModeText.textContent = "Dark Mode";
});
