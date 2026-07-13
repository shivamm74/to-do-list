const ToDoList = [];

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
      const phra2 = `<div class="todo-item"><p>${task} ${duedate}</p> <button class = "button2" onclick = "ToDoList.splice(${i},1) ; rendertodolist() ">delete <i class="fa-solid fa-box-archive"></i> </button></div>`
      todolisthtml += phra2

   }
   console.log(todolisthtml)
   document.querySelector('.phra1').innerHTML = todolisthtml;

   buttonElement.value = '';
   
}





