(()=>{
const btn = document.querySelector('[data-btn]');
const createTask = (evento)=>{
        evento.preventDefault();
        const input = document.querySelector('[data-input]');
        const input2 = document.querySelector('[data-input2]');
        console.log(input.value);
        console.log(input2.value);
        const value=input.value
        const value2=input2.value
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        input.value = '';
const taskDescription = document.createElement('div');
const taskContent=document.createElement('span');
task.innerText=value;
taskContent.innerText=input2;
taskDescription.innerText=value2;
taskContent.appendChild(task)
taskContent.appendChild(taskDescription)
list.appendChild(taskContent);
};
btn.addEventListener('click',createTask);

})();
