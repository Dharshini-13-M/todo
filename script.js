// function addTask() {
//   const taskInput = document.getElementById("taskInput");
//   const dateTimeInput = document.getElementById("dateTimeInput");
//   const taskText = taskInput.value.trim();
//   const taskTime = dateTimeInput.value;

//   if (taskText === "") {
//     alert("Please enter a task.");
//     return;
//   }

//   const li = document.createElement("li");

//   const taskContent = document.createElement("span");
//   taskContent.textContent = ${taskText} (${taskTime});

//   const completeBtn = document.createElement("button");
//   completeBtn.textContent = "✓";
//   completeBtn.onclick = () => {
//     taskContent.classList.toggle("completed");
//   };

//   const editBtn = document.createElement("button");
//   editBtn.textContent = "✎";
//   editBtn.onclick = () => {
//     const newTask = prompt("Edit your task:", taskText);
//     if (newTask) {
//       taskContent.textContent = ${newTask} (${taskTime});
//     }
//   };

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "🗑";
//   deleteBtn.onclick = () => {
//     li.remove();
//   };

//   li.appendChild(taskContent);
//   li.appendChild(completeBtn);
//   li.appendChild(editBtn);
//   li.appendChild(deleteBtn);

//   document.getElementById("taskList").appendChild(li);

//   // Clear input fields
//   taskInput.value = "";
//   dateTimeInput.value = "";
// }

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateTimeInput = document.getElementById("dateTimeInput");
  const taskText = taskInput.value.trim();
  const taskTime = dateTimeInput.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const taskContent = document.createElement("span");
  taskContent.textContent = `${taskText} (${taskTime})`;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.onclick = () => {
    taskContent.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.onclick = () => {
    const newTask = prompt("Edit your task:", taskText);
    if (newTask) {
      taskContent.textContent = `${newTask} (${taskTime})`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(taskContent);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  // Clear input fields
  taskInput.value = "";
  dateTimeInput.value = "";
}


