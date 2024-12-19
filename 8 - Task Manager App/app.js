// 1. Select DOM Elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// 2. Create event listener
todoButton.addEventListener("click", addTodo);
// 3. Function to add the task

function deleteOrCompleteTodo() {
  console.log("The user want to either delete or mark the task as completed.");
}

function addTodo(event) {
  event.preventDefault();
  // console.log("Type:", event.type);
  // console.log("Target Element:", event.target);
  // Create todoDiv container
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create todo list item
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.textContent = todoInput.value;
  todoDiv.appendChild(newTodo);
  // Create the complete button
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-btn");
  completeButton.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completeButton);
  // Create the trash button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

todoList.addEventListener("click", deleteOrCompleteTodo);

function deleteOrCompleteTodo(event) {
  const targetBtn = event.target;
  if (targetBtn.classList.contains("complete-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.toggle("completed");
  }
  if (targetBtn.classList.contains("trash-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.add("fall");
    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();
    });
  }
}
