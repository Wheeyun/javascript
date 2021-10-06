//HTML에서 구현한 엘리먼트를 가져오자

const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const todoInput = todoForm.querySelector("input");

//form이 submit이 작동해서 새로고침이 일어나더라
//e.preventDefault();를 써야한다.

//form에다 이벤트리스너를 달아야겠구나
//이벤트리스너 (이벤트,액션)
//액션을 만들어야하는구나
//handleTodoSybmit을 하나 만들고. e던져주고, e.preventDefaylt();쓴다

//새로 고침은 안되는데, submit 기본동작도 안돌아가니까
//내가 한땀한땀 코딩해야한다.
//인풋을 비워야한다.=??? todoInput.value="";
//비우면 쓸 수가 없네 비우기 전에 (어딘가에) 담아야 한다.
// 유저가 입력한 값으로 li를 만들어서 ul태그를 채워야한다
//
let todos = []; //재할당 가능하도록 let
const TODOS_KEY = "todos";

function deleteTodoItem(e) {
  const li = e.target.parentElement; // 이걸 타게팅해서 지우면 되겠구나
  li.remove();

  todos = todos.filter(todos => todos.id !== parseInt(li.id));

  saveTodo();
  //e.target.parentElement.remove();
}

function paintTodoItem(obj) {
  const todoItem = document.createElement("li");
  //   todoItem.id = newTodo.id;
  const todoSpan = document.createElement("span");
  const dltBtn = document.createElement("button");
  todoItem.id = obj.id;
  todoSpan.innerText = obj.text;
  dltBtn.innerText = "❌";
  dltBtn.addEventListener("click", deleteTodoItem); //콜백함수

  todoItem.appendChild(todoSpan);
  todoItem.appendChild(dltBtn);
  todoList.appendChild(todoItem);
}

// function deleteTodo() {
//   localStorage.removeItem(TODOS_KEY);
// }
function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
} //생짜string이기때문에 써먹을수가 없음 그래서 parse해야함
//JSON.stringify로 바꾸고 JSON.parse 해서 array로 만들어야함

function handleTodoSubmit(e) {
  e.preventDefault();
  const text = todoInput.value;
  const newTodoObj = {
    text: text,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  //saveTodo();
  paintTodoItem(newTodoObj);
  saveTodo();
  // localStorage.setItem("todos", JSON.stringify(todos));
  todoInput.value = "";

  //리스트에 들어갈 아이템을 하나씩 만들어야한다.
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  console.log("파싱완료:", parsedTodos, "원본:", savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodoItem);
  //array에 있는 요소 하나하나 꺼내면서(콜백함수가 지시하는) 작업을 실시한다
}

function saveLS() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

todoForm.addEventListener("submit", handleTodoSubmit);

// sayHello(); //함수를 호출한다.
// sayHello; // 콜백함수
