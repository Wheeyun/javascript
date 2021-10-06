//login form과 button form

//로그인 하게 해주세요  
//ㄴ해당 기능을 나만의 맞춤형으로 쓸 수 있게 해주세요 -> 로그인 기능 추가

//유저에게 ID와 패스워드를 입력 받도록 한다
//input button JS로 유효성 체크...

//const loginForm = document.querySelector('#loginForm');
//= const loginForm = document.getElementById('loginForm');

// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');
const loginInput = document.querySelector('#loginForm input');
const loginForm = document.querySelector('#loginForm');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

//수학에서 말하는 함수 : f(x) 정의역->치역 상태값을 기억할 필요 X
//프로그래밍에서 말하는 함수 : 'state'
function handleLoginSubimit(event){
    
    event.preventDefault();
    // 99% const, 1% let, never var
    const username = loginInput.value;
    // console.log(event);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    showGreeting(username);

    //원초적인 유효성 검사 -> HTML 명렁어로도 가능
    // if (username === '') {
    //     alert('아이디는 필수입니다');
    // } 
    // else if (username.length > 15) {
    //     alert('길이가 긴 아이디입니다')
    // }
    // else if (username.length < 3) {
    //     alert('길이가 짧은 아이디입니다')
    // }
   
}

//handleMouseClick(); // 즉시 실행, JS가 직접 실행

function showGreeting(username){
    greeting.innerText = `환영합니다 ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (!savedUsername) {
    //입력폼을 보여줘야 한다
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', handleLoginSubimit)
} else{
    //인사말을 보여줘야 한다
    showGreeting(savedUsername);
}
