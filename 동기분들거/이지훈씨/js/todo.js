const todoForm = document.querySelector('#todoForm');
const todoList = document.querySelector('#todoList');
const todoInput = todoForm.querySelector('input');

const TODOS_KEY = 'todos'

let todos = [];

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    //console.log(parsedTodos)
    todos = parsedTodos;
    parsedTodos.forEach(paintTodoItem);
}

// --------<function>------------

function handleTodoSubmit(e) {
    e.preventDefault();
   const newText = todoInput.value;

    // id를 추가해서 지우는데에 사용해보자
    const newTodoOjt = {
        id: Date.now(),
        text: newText,
    }

   todoInput.value = "";
   todos.push(newTodoOjt);

   paintTodoItem(newTodoOjt);
   saveTodo();
}

function paintTodoItem(newTodoOjt) {
    const todoItem = document.createElement('li');
    todoItem.id = newTodoOjt.id;
    const todoSpan = document.createElement('span');
    const dltBtn = document.createElement('button');
    dltBtn.innerText = '❌';
    dltBtn.addEventListener('click', deleteTodoItem);   
    //콜백함수 event를 deleteTodoItem에게 넘겨줌

    todoSpan.innerText = newTodoOjt.text;
    todoItem.appendChild(todoSpan);
    todoItem.appendChild(dltBtn);

    todoList.appendChild(todoItem);
}

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodoItem(e) {
    //console.log(e.target.parentElement.innerText)
    const li = e.target.parentElement;
    
    // ----<id 부여해서 지우기>-----
    // console.log(li.id);     // 눌린 버튼의 li의 아이디가 잘 읽힘
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
    // ----------------------------


    // // ------<localstorage에서 삭제 index 구하기>------
    // // li 몇개? : li.parentElement(ul)의 자손 Array에서. 눌린li는 몇번째?
    //  const index = [...li.parentElement.children].indexOf(li)
    // //const index = Array.from(li.parentElement.children).indexOf(li);
    // console.log(index)
    // console.log(todos);
    // // todos 배열에서 눌린li의 index에서부터 1개 삭제
    // todos.splice(index, 1);
    // console.log(todos);
    // // todos배열을 다시 localstorage에 세팅
    // saveTodo();
    // //-------------------------------------------------


    li.remove();
}