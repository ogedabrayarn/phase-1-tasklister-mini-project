// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     addingEventListener(e.target.new_todo.value)
//   })
// });
// function addingEventListener(todo){
//   console.log(todo)
// }

  const taskList = new TaskList();
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new tasks will live on the DOM
  const taskToDo = document.getElementById("tasks");

  const handleToDo = () => (taskToDo.innerHTML = taskList.renderTasks());
  //attach event listeners

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    // reset form
    e.target.reset();
    handleToDo();
  });

  taskToDo.addEventListener("click", (e) => {
    if (e.target.nodeName === "btn") {
      taskList.deleteTask(e.target.dataset.description);
      handleToDo();
    }
  }
);
