
(()=>{
const btn = document.querySelector('[data-btn]');
const createNombre = (e)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    //console.log(input.value);
const value=input.value
const list = document.querySelector('[data-list]');
const task = document.createElement('li');//aqui creamos nuestro elemento li
task.classList.add('card');//asigno los estilos de card
input.value = '';
const taskContent = document.createElement('div');
const titleTask = document.createElement('span');
titleTask.classList.add('task')
titleTask.innerText= value;//valores 
taskContent.appendChild(checkComplete());
taskContent.appendChild(titleTask);//span dentro del div
    //const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML=content;
    task.appendChild(taskContent);//div dentro del li
    task.appendChild(deleteIcon());
    list.appendChild(task);//introduce li dentro del ul
};

btn.addEventListener('click',createTask);
})();