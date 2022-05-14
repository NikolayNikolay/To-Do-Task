// ===работа с блоком новых заданий=====================================
const addNewTask = document.querySelector('.add-task__new-task');//блок с кнопкой добавить задание

const taskText = document.querySelector('.task-text');//блок с ипутом и кнопкой

const taskInput = document.querySelector('.task-text__input');//фокус инпута
const taskTextbtn = document.querySelector('.task-text__button');//кнопка добавить задание 

const addTaskUserTask = document.querySelector('.add-task__user-task');//блок для выводы данных с заданиями
let objTascLocal;//будующий масив
// localStorage.removeItem('task')
//получение данных Task из локал
if (localStorage.getItem('task')) {
   objTascLocal = JSON.parse(localStorage.getItem('task'));
   console.log(objTascLocal);
   amountTask.textContent = objTascLocal.length
   getTaskDoc(objTascLocal) //вывод данных в список дел
}
else {
   objTascLocal = []
}
//клик по тексту или кнопке + Add new task
addNewTask.addEventListener("click", function (e) {
   if (e.target.matches('.button') || e.target.matches('.add-task__title')) {
      taskText.classList.add('active')
      taskInput.focus()
   }
   //клик по кнопке add
   if (e.target.matches('.task-text__button')) {
      addTaskLocal()//запись в локал введенных заданий
   }
});
//добавляет задание в локал
function addTaskLocal(params) {
   if (taskInput.value !== '') {
      let local = { taskAdd: taskInput.value[0].toUpperCase() + taskInput.value.slice(1).toLowerCase() }
      objTascLocal.push(local)
      localStorage.setItem('task', JSON.stringify(objTascLocal))//добавляем
      taskText.classList.remove('active')
      taskInput.value = ''
      objTascLocal = JSON.parse(localStorage.getItem('task'));
      localStorage.setItem('task', JSON.stringify(objTascLocal))
      getOneNewTask(objTascLocal) //вывод заданий на экран
   }
   else {
      localStorage.setItem('task', JSON.stringify(params))
   }
}


// вывод заданий на экран
function getTaskDoc(params) {
   let getTask = params;
   getTask.forEach(elem => {
      addTaskUserTask.innerHTML += `<div class="task">
      <div class="task__basket"><img src="./icons/cart.png" alt="#"></div>
      <div class="task__reload">&#9997</div>
      <input type="checkbox" class="task__checkbox">
      <div class="task__text">${elem.taskAdd}</div>
   </div>`
   });
   // if (objTascLocal.length == 0) {
   //    localStorage.removeItem('task')
   // }
}

// добавление 1 заданий на экран

function getOneNewTask(params) {
   let getTask = params;
   // console.log(getTask[getTask.length - 1].taskAdd);
   let getstring = getTask[getTask.length - 1].taskAdd;
   addTaskUserTask.innerHTML += `<div class="task">
      <div class="task__basket"><img src="./icons/cart.png" alt="#"></div>
      <div class="task__reload">&#9997</div>
      <input type="checkbox" class="task__checkbox">
      <div class="task__text">${getstring}</div>
   </div>`
   amountTask.textContent = +amountTask.textContent + 1
}

// клик на корзину
addTaskUserTask.addEventListener("click", item);
function item(e) {
   const taskBasketBtn = document.querySelectorAll('.task__basket');//корзина
   const taskBlock = document.querySelector('.task');//блок с заданием
   const task__reload = document.querySelectorAll('.task__reload');// перезапись
   const taskText = document.querySelectorAll('.task__text');//тест задания
   // objTascLocal = JSON.parse(localStorage.getItem('task'));
   let arrTaskLocal = JSON.parse(localStorage.getItem('task'));
   // =======перебор элементов корзины=========================
   if (e.target.closest('.task__basket')) {
      for (let i = 0; i < taskBasketBtn.length; i++) {
         // =================поиск совпадения клика================
         if (e.target.closest('.task__basket') == taskBasketBtn[i]) {
            objTascLocal = arrTaskLocal.filter((elem, index) => index !== i)
            addTaskUserTask.removeChild(taskBlock)
            amountTask.textContent = +amountTask.textContent - 1
            addTaskLocal(objTascLocal)
         }
      }
      if (taskBasketBtn.length - 1 == 0) {
         localStorage.removeItem('task')
      }
   }
   // ====поиск блока который нужно изменить==========================================================
   if (e.target.closest('.task__reload')) {
      for (let i = 0; i < task__reload.length; i++) {
         if (e.target.closest('.task__reload') == task__reload[i]) {
            // ============поиск элемента==========================================
            for (let j = 0; j < taskText.length; j++) {
               if (i == j) {
                  // ======запуск функции которая обработает запрос на изменение задания==========================
                  console.log(taskText[j].textContent);
                  rewriteTask(taskText[j])
                  addTaskUserTask.removeEventListener("click", item)
               }
            }
         }
      }
   }
}


function setClick() {

}





