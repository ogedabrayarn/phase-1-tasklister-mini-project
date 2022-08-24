document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTaskForm = document.getElementById('create-task-form')
  let taskList = document.getElementById('list')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let newTask = document.getElementById('new-task-description').value
    //creating appending element
    let li = document.createElement('li')
    li.innerText = task
    let btn = document.createElement('button')
    btn.innerText = 'New Value'

    btn.addEventListener('click', (event) => {
      let secondTask = prompt('Edit Task')
      li.innerText = editTask
    })
    li.appendChild(editButton)
    let deleteBtn = document.createElement('button')
    delBtn.innerText = 'clear'
    delBtn.addEventListener('click', (event) => {
      e.target.parentElement.remove()
    })
    li.appendChild(delBtn)


    list.appendChild(li)
    form.reset()
  })
});
