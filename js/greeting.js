// 로그인 기능 추가 <- 해당 기능을 나만의 맞춤형으로 쓸 수 있게 해주세요
// 유저에게 ID와 패스워드를 입력 받도록
// input button JS로 유효성 체크

// const loginForm = document.querySelector('#loginForm');
// const loginForm =
//     document.getElementById('loginForm');
// const loginInput =
//     loginForm.querySelector('input');
// const loginButton =
//     loginForm.querySelector('button');

//querySelectorAll()[indexnum] 여러 개 중에 몇번 째 선택할 건지

// const registerForm =
//     document.querySelector('#register');

// const yearInput = document.querySelectorAll(
//     '#loginForm input',
// )[3];

// const monthInput = document.querySelector(
//     'select[name="month"]',
// );

// const dayInput = document.querySelectorAll(
//     '#loginForm input',
// )[4];

// const genderInput = document.querySelector(
//     'select[name="gender"]',
// );

// const emailInput = document.querySelectorAll(
//     '#loginForm input',
// )[5];

// const telInput = document.querySelectorAll(
//     '#loginForm input',
// )[6];

// const loginPassword = document.querySelectorAll(
//     '#loginForm input',
// )[1];

//-------------------------------------------------------

const loginInput = document.querySelectorAll(
    '#loginForm input',
)[0];

const loginForm =
    document.querySelector('#loginForm');
// html의 id를 전역변수처럼 쓸 수 있더라.. 윗 줄 주석해도 동작하더라..
// 같은 이름으로 쓸 수 있긴한데 그렇게는 안 쓰는 것을 권고

const greeting =
    document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handleBtnClick(e) {
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME); //숨기면 된다!
    localStorage.setItem(USERNAME_KEY, username);
    showGreeting(username);
    // console.log('환영합니다!', username);

    //--------------------------------------------
    // const userPassword = loginPassword.value;
    // console.log('password :', userPassword);
    // console.log('year :', yearInput.value);
    // console.log('month :', monthInput.value);
    // console.log('day :', dayInput.value);
    // console.log('gender :', genderInput.value);
    // console.log('email :', emailInput.value);
    // console.log('telephone', telInput.value);

    // 99% const, 1% let, never var
    // console.log(e);

    // if (username === '') {
    //     alert('아이디는 필수입니다.');
    // } else if (username.length > 15) {
    //     alert('너무 긴 아이디입니다.');
    // } else if (username.length < 3) {
    //     alert('너무 짧은 아이디입니다.');
    // } //브라우저(html)가 다 해주더라
}

function showGreeting(username) {
    greeting.innerText = `환영합니다! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername =
    localStorage.getItem(USERNAME_KEY);

if (!savedUsername) {
    //로그인을 안한 상태 // 입력폼을 보여줘야한다
    loginForm.classList.remove(HIDDEN_CLASSNAME); //히든을 지워서 보여준다

    loginForm.addEventListener(
        'submit',
        handleBtnClick,
    );
} else {
    //로그인 한 상태 // 새로고침해도 환영인사
    showGreeting(savedUsername);
}
