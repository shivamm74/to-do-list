const ToDoList = [];

function addItem() {


   const buttonElement =  document.querySelector('.input');
   const buttonValue = buttonElement.value;
   let todolisthtml = '';
   
   ToDoList.push(buttonValue);
   console.log(ToDoList)
   for (let i = 0 ; i < ToDoList.length ; i++){
      const todo = ToDoList[i];
      const phra2 = `<p>${todo}<p>`
      todolisthtml += phra2

   }
   console.log(todolisthtml)

   buttonElement.value = '';
}