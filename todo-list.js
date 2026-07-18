


let ToDoList = JSON.parse(localStorage.getItem('tasks')) || [];
rendertodolist();


function addItem() {
   


   const buttonElement =  document.querySelector('.input');
   const buttonValue = buttonElement.value;


   const dateelement = document.querySelector('.input1');
   const date  = dateelement.value;

 
   ToDoList.push({task : buttonValue, duedate : date});

   rendertodolist();

   buttonElement.value = '' ;
   dateelement.value = '';
   


}

   function rendertodolist () {
      let todolisthtml = '';
   
   for (let i = 0 ; i < ToDoList.length ; i++){
      const todoobject = ToDoList[i];
      const task = todoobject.task;
      const duedate = todoobject.duedate;
      const phra2 = `<div class="todo-item"><p class="task-text"><button class = "serial-number">${[i+1]}.</button>${task}</p><p class="date-text">${duedate}</p><button type="button" class="button2" aria-label="Delete task" onclick="ToDoList.splice(${i},1);rendertodolist()"></button></div>`
      todolisthtml += phra2

   }
   console.log(todolisthtml)
   document.querySelector('.phra1').innerHTML = todolisthtml;
   localStorage.setItem('tasks',JSON.stringify(ToDoList));
   
}





