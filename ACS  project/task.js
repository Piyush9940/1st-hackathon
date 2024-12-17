 
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

 
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();

 
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
  
    const currentDate = new Date().toLocaleDateString();

    
    const newTask = {
      id: Date.now(), 
      text: taskText,
      date: currentDate  
    };

 
    tasks.push(newTask);

  
    localStorage.setItem('tasks', JSON.stringify(tasks));

 
    renderTasks();

 
    taskInput.value = '';
  }
}

 
function removeTask(taskId) {
 
  tasks = tasks.filter(task => task.id !== taskId);

   
  localStorage.setItem('tasks', JSON.stringify(tasks));

   
  renderTasks();
}

 
function renderTasks() {
   
  taskList.innerHTML = '';

  
  tasks.forEach(task => {
    const listItem = document.createElement('li');

     
    const taskText = document.createElement('span');
    taskText.textContent = task.text;

    
    const taskDate = document.createElement('span');
    taskDate.textContent = ` - ${task.date}`;
    taskDate.style.fontStyle = 'italic';
    taskDate.style.color = '#888';

  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = function() {
      removeTask(task.id);
    };

     
    listItem.appendChild(taskText);
    listItem.appendChild(taskDate);
    listItem.appendChild(deleteButton);

    
    taskList.appendChild(listItem);
  });
}
