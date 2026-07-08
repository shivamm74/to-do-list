const ToDoList = [];

function addItem() {


   const buttonElement =  document.querySelector('.input');
   const buttonValue = buttonElement.value;
   ToDoList.push(buttonValue);
   console.log(ToDoList)
   buttonElement.value = '';
}