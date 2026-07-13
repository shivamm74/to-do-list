const ToDoList = [];

function addItem() {
   


   const buttonElement =  document.querySelector('.input');
   const buttonValue = buttonElement.value;
 
   ToDoList.push(buttonValue);
   rendertodolist();


}

   function rendertodolist () {
      let todolisthtml = '';
   
   for (let i = 0 ; i < ToDoList.length ; i++){
      const todo = ToDoList[i];
      const phra2 = `<div class="todo-item"><p>${todo}</p> <button class = "button2" onclick = "ToDoList.splice(${i},1) ; rendertodolist() ">delete <i class="fa-solid fa-box-archive"></i> </button></div>`
      todolisthtml += phra2

   }
   console.log(todolisthtml)
   document.querySelector('.phra1').innerHTML = todolisthtml;

   buttonElement.value = '';
   
}





