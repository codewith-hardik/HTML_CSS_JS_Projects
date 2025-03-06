// document.addEventListener("DOMContentLoaded", () => {
//     const addTaskBtn = document.getElementById("addTaskBtn");
//     const taskInput = document.getElementById("taskInput");
//     const taskList = document.getElementById("taskList");

//     const addTask = () => {
//         const taskText = taskInput.value.trim();
//         if (taskText === "") {
//             alert("Please enter a task!");
//             return;
//         }

//         const listItem = document.createElement("li");

//         const taskTextSpan = document.createElement("span");
//         taskTextSpan.textContent = taskText;

//         const deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.className = "deleteBtn";

//         deleteBtn.addEventListener("click", () => {
//             taskList.removeChild(listItem);
//         });

//         listItem.appendChild(taskTextSpan);
//         listItem.appendChild(deleteBtn);
//         taskList.appendChild(listItem);

//         taskInput.value = "";
//     };

//     addTaskBtn.addEventListener("click", addTask);

//     taskInput.addEventListener("keypress", (event) => {
//         if (event.key === "Enter") {
//             addTask();
//         }
//     });
// });



const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task
addTaskBtn.addEventListener('click', () => {
  const taskValue = taskInput.value.trim();
  if (taskValue === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskValue}</span>
    <button class="task-btn">&#10006;</button>
  `;



  // Remove Task on Button Click
  li.querySelector('.task-btn').addEventListener('click', () => li.remove());

  taskList.appendChild(li);
  taskInput.value = '';
});

taskInput.addEventListener("keypress",(e)=>{
    const taskValue = taskInput.value.trim();
    if (taskValue === '') return;
//   console.log("good")
const li = document.createElement('li');
    if(e.key === "Enter"){
        li.innerHTML = `
        <span>${taskValue}</span>
        <button class="task-btn">&#10006;</button>
      `;
    }

    li.querySelector('.task-btn').addEventListener('click', () => li.remove());

    taskList.appendChild(li);
    taskInput.value = '';
  })

