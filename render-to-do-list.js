function rendertodolist () {
    let todolisthtml = '';
 
  ToDoList.forEach(function(todoobject,i){
 
    const task = todoobject.task;
    const duedate = todoobject.duedate;
    const phra2 = `<div class="todo-item"><p class="task-text"><button class = "serial-number">${[i+1]}.</button>${task}</p><p class="date-text">${duedate}</p><button type="button" class="button2" aria-label="Delete task" ></button></div>`
    todolisthtml += phra2});

 

 console.log(todolisthtml)
 document.querySelector('.phra1').innerHTML = todolisthtml;

 document.querySelectorAll('.button2').forEach((deletebutton,index) => {
    deletebutton.addEventListener('click', () => {
       ToDoList.splice(index,1);
       rendertodolist();
    })
 })
 localStorage.setItem('tasks',JSON.stringify(ToDoList));
 
 }



