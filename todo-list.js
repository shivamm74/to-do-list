import { renderTodoList } from './render-to-do-list.js';


let ToDoList = JSON.parse(localStorage.getItem('tasks')) || [];
renderTodoList(ToDoList);

document.querySelector('.button1').addEventListener('click',() => {
   addItem()
})

document.body.addEventListener('keydown',(event) => {
   if(event.key === "Enter") {
      addItem()
   }
})

function addItem() {
   


   const buttonElement =  document.querySelector('.input');
   const buttonValue = buttonElement.value;


   const dateelement = document.querySelector('.input1');
   const date  = dateelement.value;

 
   ToDoList.push({task : buttonValue, duedate : date});

   renderTodoList(ToDoList);

   buttonElement.value = '' ;
   dateelement.value = '';
   


}

 


