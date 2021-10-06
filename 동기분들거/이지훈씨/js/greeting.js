const loginInput = document.querySelector('#loginForm input');
const loginForm = document.querySelector('#loginForm');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handleBtnClick(e) {
    e.preventDefault();
    const username = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);

    localStorage.setItem(USERNAME_KEY, username);
    
    showGreeting(username);
}

function showGreeting(username) {
    greeting.innerText = `어서오세요 ${username} 님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (!savedUsername) {
    // 유저가 없으니까, 입력폼 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', handleBtnClick);
}else {
    // 유저가 있으니까, 환영메세지 on
    showGreeting(savedUsername);
}