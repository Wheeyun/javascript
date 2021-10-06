const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');
const todoInput = document.querySelector('#todoForm input')

let todos = [];

const savedTodos = localStorage.getItem('todos');

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodos);
}

todoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const text = todoInput.value;
    const newTodoObj = {
        id: Date.now(),
        text: text
    };

    saveLS();
    todoInput.value = '';
    todos.push(newTodoObj);
    paintTodos(newTodoObj);
});

function paintTodos(todoObj){
    const span = document.createElement('span');
    const button = document.createElement('button');
    const li = document.createElement('li');
    li.id = todoObj.id;
    span.innerText = todoObj.text;
    button.innerText = '🈳';
    button.addEventListener('click', (e) => {
        const li = e.target.parentElement;
        todos = todos.filter((todo) => todo.id !== parseInt(li.id));
        
        li.remove();
        saveLS();
    });

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function saveLS (){
    localStorage.setItem('todos', JSON.stringify(todos));
}