function rewriteTask(classList) {
   let inp = document.createElement('input')
   let btn = document.createElement('button')
   btn.textContent = 'rewrite'
   inp.classList.add('task__text-input')
   inp.value = classList.textContent
   classList.textContent = ''
   classList.append(inp, btn)
   inp.focus()
   classList.addEventListener("click", function (e) {
      console.log(e.target.tagName == 'BUTTON');
      if (e.target.tagName == 'BUTTON') {
         console.log(classList);
         classList.textContent = inp.value
         console.log(classList.textContent);
         addTaskUserTask.addEventListener("click", item)
      }
   });
}