// ====при нажати кнопки lets start появляется окошко с вводом имени и когда имя введено правильно будет переход на блок с task=====
const btnUserName = document.querySelector('.btn-user-name');//кнопка let Start

const pupapUserName = document.querySelector('.pupap-user-name'); // блок с вводом имени

const pupapBtn = document.querySelector('.pupap-user-name__button');//кнопка с добавлением имени пользователя в локал сторадж

const pupapInput = document.querySelector('.pupap-user-name__input');//поле ввода имени пользователя

const bossList = document.querySelector('.boss-list');//главная начальная страничка

const main = document.querySelector('.main');//страничка с добавлением заданий

const userHi = document.querySelector('.user-name');//вывод имени юзера

const logoutMenuBtn = document.querySelector('.logout-menu');//выход пользователя полное удаление

const amountTask = document.querySelector('.amount-task span');// вывод количество Task
amountTask.textContent = 0; // начальное количество Task
// открытие окна с водом юзера
btnUserName.addEventListener("click", function (e) {
   pupapUserName.classList.add('active')
});
checkUserName()//проверка при загрузке на наличие введеного имени пользователя
// подтверждение имени пользователя
pupapBtn.addEventListener("click", function (e) {
   if (pupapInput.value !== '') {
      let str = pupapInput.value[0].toUpperCase() + pupapInput.value.slice(1);
      localStorage.setItem('user', str)
      pupapUserName.classList.remove('active')
      bossList.classList.remove('active')
      main.classList.add('active')
      checkUserName()//вывод юзера
      pupapInput.value = ''
   }
   else {
      pupapInput.placeholder = 'Invalid name'
      pupapInput.classList.add('active')
   }
});
// =========проверка локал на наличие имени юзер, если есть то начальный блок непоказывать==============
function checkUserName() {
   let userName = localStorage.getItem('user')
   if (userName) {
      console.log(userName);
      pupapUserName.classList.remove('active');
      bossList.classList.remove('active');
      main.classList.add('active');
      getUserName(userName);//вывод в блок const userHi = document.querySelector('.user-name');//вывод имени юзера
   }
   else {
      // pupapUserName.classList.('active');
      bossList.classList.add('active');
      main.classList.remove('active');
   }
}

// ========работа с блоком TaskUser====================================================================
function getUserName(params) {
   userHi.textContent = params
}
// работа с кнопкой Logout
logoutMenuBtn.addEventListener("click", function (e) {
   localStorage.clear()//удаление всех списков и очмщение user полное обновление
   checkUserName()
   amountTask.textContent = 0;
   window.location.reload()
});