(() => {
const btn = document.querySelector('[data-btn]');
const createTask = (evento) => {
evento.preventDefault();

        const input = document.querySelector('[data-input]');
        const input2 = document.querySelector('[data-input2]');
        const input3 = document.querySelector('[data-input3]');
      
        const value = input.value;
        const value2 = input2.value;
        const value3 = input3.value;
      
          const list = document.querySelector('[data-list]');
//creacrion de elementos
        const taskContent = document.createElement('li');
        const task = document.createElement('p');
        const taskDescription = document.createElement('p');
        const taskPrecio = document.createElement('p');

        task.innerText = ("Producto: "+value+"");
        taskDescription.innerText = ("Descripcion: "+ value2+"");
        taskPrecio.innerText = ("precio: "+ value3+"");
//apenChild   
        taskContent.appendChild(task);
        taskContent.appendChild(taskDescription);
        taskContent.appendChild(taskPrecio);
        list.appendChild(taskContent);

        input.value = '';
        input2.value = '';
        input3.value = '';
        };
      
btn.addEventListener('click', createTask);
})();


document.addEventListener("DOMContentLoaded", function() {
        const h2Element = document.querySelector("h2");
        h2Element.classList.add("animated"); // "animated" es el nombre de la clase CSS
      });
      