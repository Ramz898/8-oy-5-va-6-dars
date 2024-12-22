const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todolist = document.getElementById('todolist');
const themeBtn = document.getElementById('taskinour');
const body = document.body;

function createTask(taskText){
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button')



    checkbox.type = 'checkbox';
    checkbox.className = 'taskCheckbox';
    span.textContent = '❌';
    deleteBtn.className = 'dleteBtn';
    
    
    checkbox.addEventListener('change', () =>{
        span.classList.toggle('completed', checkbox.checked);
    })
    deleteBtn.addEventListener("click", () =>li.remove())

    li.append(checkbox, span, deleteBtn);
    todolist.appendChild(li);

}
addTaskBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    themeBtn.textContent = body.classList. contains("dark-theme") ? "" : "🌙";

})

document.querySelectorall("li").array.forEach((li) => {
    const checkbox = li.querySelector(".taskCheck");
    const deleteBtn = li.querySelector(".deleteBtn");
    const span = li.querySelector("span");



    checkbox. addEventListener ("change", () => {
        span.classList.toggle("completed", checkbox.checked);
    })



    deleteBtn.addEventListener("click", () => li.remove());
});