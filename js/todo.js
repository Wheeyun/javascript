const todoForm =
    document.getElementById('todoForm');
const todoList =
    document.getElementById('todoList');
// const todoInput = todoForm.querySelector('input');
const todoInput = document.querySelector(
    '#todoForm input',
);
let todos = [];
// let id = 0;

function saveLS() {
    localStorage.setItem(
        'todos',
        JSON.stringify(todos),
    );
}

function handleSubmit(e) {
    e.preventDefault();

    const todo = todoInput.value;

    const newTodoOjt = {
        id: Date.now(),
        todo: todo,
    };

    todoInput.value = '';
    todos.push(newTodoOjt);
    saveLS();
    paintTodo(newTodoOjt); //id, todo //todo => <li> <span>todo</span> <button> </li>
    // id += 1;
}

function paintTodo(todoOjt) {
    //id, todo
    const todoItem = document.createElement('li');
    const todoSpan =
        document.createElement('span');
    const delBtn =
        document.createElement('button');

    // todoItem.setAttribute('id', id);
    todoItem.id = todoOjt.id;
    todoSpan.innerText = todoOjt.todo;
    delBtn.innerText = '삭☆제';

    delBtn.addEventListener('click', (e) => {
        //콜백함수
        const li = e.target.parentElement;

        li.remove();
        todos = todos.filter((todo) => {
            //익명함수
            // console.log(todo.id, li.id);
            return todo.id !== parseInt(li.id);
        });
        saveLS();
        // todos = todos.filter((todo) => {
        //     //return이 있어야 원하는 배열 반환..{}가 있어서!
        //     return (
        //         todo.id !==
        //         parseInt(
        //             e.target.parentElement.id, //string
        //         )
        //     );
        // });

        //---------------------------------------------

        // const indexNum = todos.indexOf(
        //     e.target.parentElement.firstChild
        //         .innerText,
        // ); //같은 문자의 인덱스번호를 찾는다..
        //(동일한게 있으면 앞의 인덱스번호를 가져온다)
        // 고유한 값이 아니라서 안 좋은 방법이다..!!

        // todos.splice(indexNum, 1); // 그 인덱스 번호부터 1개를 삭제
        // 기존의 배열을 바꿔버림 => filter()를 권장!
        // filter를 사용하려면 고유한 id값이 필요하다!
        // 배열을 바꿔볼까? {id: , text: }
        // 내가 누른 버튼의 id 값은 어떻게 얻지?
        // li 태그에 id 속성을 추가 해보자
        // id 속성에 todo.id 삽입 => 고유한 리스트가 생긴다
        // 클릭한 리스트의 id값을 가져올 수 있게 되었다..
        // e.target.parentElement.id

        // console.log(
        //     todos.filter(
        //         (todo) =>
        //             todo.id !==
        //             parseInt(
        //                 e.target.parentElement.id,
        //             ),
        //     ),
        // );
    });

    todoItem.appendChild(todoSpan);
    todoItem.appendChild(delBtn);
    todoList.appendChild(todoItem);
}

todoForm.addEventListener('submit', handleSubmit);

const savedTodos = localStorage.getItem('todos');

if (savedTodos) {
    // && savedTodos !== '[]'
    const parsedTodos = JSON.parse(savedTodos);
    // console.log(parsedTodos);
    todos = parsedTodos;
    // id = todos[todos.length - 1].id + 1;
    parsedTodos.forEach(
        (
            todoOjt, //todo
        ) => paintTodo(todoOjt), //todo.id, todo.todo
    );
}
