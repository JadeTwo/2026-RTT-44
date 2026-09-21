let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
 
addTaskButton.addEventListener("click", function () {
  let taskText = taskInput.value;
 
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
 
  // create a list item
  let listItem = document.createElement("li");
  listItem.innerText = taskText;

  // create a checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox"

  // add margin to checkbox
  checkbox.style.marginRight = "10px";

  // add the input to the task list
  listItem.prepend(checkbox);
 
  taskList.appendChild(listItem);
  taskInput.value = ""; // Clear the input field
});

taskList.addEventListener("click", function (event) {
    console.log(event.target.tagName)

    // checking if we clicked on the checkbox input
    if (event.target.tagName === "INPUT") {
        // select the parent of the checkbox (which is the <li>)
        let li = event.target.parentElement

        // check if there's a line through
        if (li.style.textDecoration === "line-through") {
            // remove the line through
            li.style.textDecoration = "";
        } else {
            // add the line through
            li.style.textDecoration = "line-through";
        }
    }
});


let name = 'sally';

console.log(name);

let task = {
    status: 'Completed'
}

console.log(task.status);

let greeting = `Hello my name is ${name}.`
