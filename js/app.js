// alert("드디어 천목 얻었다..");
// alert("6개월 개꿀");

Boolean;
const a = true; //const a = "true" // 절대 안됨ㅋㅋ
const b = false;

if (a) {
    console.log(
        'boolean : true값이 들어왔습니다.',
    );
} else
    console.log(
        'boolean : false값이 들어왔습니다.',
    );

undefined;
null;
const c = null;
var d;
console.log('c : ' + c);
console.log('d : ' + d);

Array;
const array = [
    '이것은',
    '배열',
    '이라',
    '하옵니다..',
];
//String 배열이옵니다
console.log(array);

const every = [
    'string',
    1,
    {
        name: '오브젝트',
    },
    () => {
        console.log('함수');
    },
]; //비효율적
console.log(every);

Object;
const Destiny = {
    name: '에리스 몬',
    serif: '수호자, 나를 따라와..',
    array: ['배열', '들어감'],
    object: {
        name: '오브젝트 들어감',
    },
}; //배열도 들어가고 오브젝트도 들어감
//JSON 형태
console.log(Destiny);
console.log('--' + Destiny['name']);
console.log('  : ' + Destiny['serif']);

//spread syntax
const newDestiny = {
    ...Destiny,
    name: '대머리빡빡이자발라',
    array: ['오시리스는', '알고보니', '사바툰'],
}; //원본은 안 바뀜 // 그래서 새로 만듦

Destiny.serif = 0; // 원본이 바뀜 // 자료형 상관없이

console.log(Destiny);
console.log(newDestiny);

const e = parseInt(
    prompt('남은 시즌 개월 수는?'),
);
//절반도 안지났네요.. // 절반 지났네 // 잘못된 입력이네
if (!isNaN(e)) {
    if (e >= 4) {
        console.log(
            '절반도 안 지났네요.. 천목들고 힘내요',
        );
    } else
        console.log(
            '절반은 지났네요.. 조금만 더 기다리면..!',
        );
} else console.log('숫자 입력 안 했죠?');

console.log(typeof parseInt(e));
console.log(typeof e);

const elementId =
    document.getElementsByTagName('div'); // Elements로 받아오면 배열로 가져옴
console.log(elementId);

elementId[1].innerText = '다음 시즌은 갓겜일거야';

// element1.style.color = 'red'; //자바스크립트에서 요소로 접근 및 변경

//(div)#title => <div id ="title"></div>
//(div).title => <div class="title"></div>

const element1 = document.querySelector(
    'div.game2 h3',
); //css 선택자 지정방식이랑 같음
const CLASSNAME_ACTIVE = 'active';
const CLASSNAME_TITLE = 'game4';
console.log(element1.classList);
//classList => 가지고 있는 className의 리스트를 보여준다
//className => 여러 개 가지고 있을 수 있다.. 예) class = "title active"
function handleMouseClick() {
    element1.classList.toggle(CLASSNAME_ACTIVE);
    // if (
    //     element1.classList.contains(
    //         CLASSNAME_ACTIVE,
    //     )
    // ) {
    //     element1.classList.remove(
    //         CLASSNAME_ACTIVE,
    //     ); // 있으면 빼고
    // } else {
    //     element1.classList.add(CLASSNAME_ACTIVE);
    //     //없으면 추가
    // }
    console.log('click!');
}
element1.addEventListener(
    'click',
    handleMouseClick,
); //매개변수로 들어가는 함수는 () 쓰지않는다
// 유저가 조작할 때

//handleMouseClick(); //JS가 직접 조작할 때

const title = document.querySelector('.game1');
const BLACK = 'black';
const BLUE = 'blue'; //상수 지정

function handleMouseClick1() {
    const currentColor = title.style.color;
    let nextColor; //새 변수 지정

    if (currentColor === BLACK) {
        nextColor = BLUE;
    } else {
        nextColor = BLACK;
    } // 원래의 것을 바꾸지 않고 새 변수에 저장

    title.style.color = nextColor; // 새 변수에 바뀐 것을 기존에 씌우기
}

title.addEventListener(
    'click',
    handleMouseClick1,
);

function handleMouseLev() {
    title.textContent = '커밍쑨';
}
title.addEventListener(
    'mouseleave',
    handleMouseLev,
);
const MOUSE_ENTER = 'mouseenter';
function handleMouseEnt() {
    title.textContent = '데스티니 2 마녀여왕';
}
title.addEventListener(
    MOUSE_ENTER,
    handleMouseEnt,
);

const nicknameInput =
    document.querySelector('input');
const submit = document.querySelector('button');

const nicknameDiv =
    document.querySelector('#nickname');
const enjoyIt = document.querySelector('#enjoy');
const clockSys =
    document.querySelector('#clockSys');
const HIDDEN = 'hidden';
const NICKNAME_KEY = 'nickname';
// function handleInput(e) {
//   value.textContent = `${e.target.value}`;
// }

// input.oninput = handleInput;

function showWelcom(nickname) {
    enjoyIt.classList.remove(HIDDEN);
    enjoyIt.innerText = `Welcome to Destiny2! #${nickname}`;
}

function handleSubmit(e) {
    e.preventDefault();
    const nickname = nicknameInput.value;
    console.log(`${nickname}님 어서오세요`);
    nicknameDiv.classList.add(HIDDEN);
    localStorage.setItem(NICKNAME_KEY, nickname);
    showWelcom(nickname);
}
const savedNickname =
    localStorage.getItem(NICKNAME_KEY);
if (!savedNickname) {
    nicknameDiv.classList.remove(HIDDEN);
    submit.onclick = handleSubmit;
} else {
    showWelcom(savedNickname);
}

function getClockSys() {
    const date = new Date();
    const hours = String(
        date.getHours(),
    ).padStart(2, '0');
    const minutes = String(
        date.getMinutes(),
    ).padStart(2, '0');
    const seconds = String(
        date.getSeconds(),
    ).padStart(2, '0');
    // console.log(`${hours}:${minutes}:${seconds}`);

    clockSys.innerText = `${hours}:${minutes}:${seconds}`;
}
getClockSys();
setInterval(getClockSys, 1000);

//HTMLHeadingElement Web API

//---------------------------------------------
//Window Web API
//어디 범위까지 접근하는지 알아두자

//자잘한 애들은 const로 변수설정,
//문서에 중요한 부분(body, title)은 이렇게 하더라
//변수명 title과 document.title은 다른걸 가리킨다!

function handleWindowResize() {
    //윈도우 창 크기가 변경될때 마다 색이 바뀌었으면 좋겠다
    //그게 아몬드색이랑 스카이블루
    // 아몬드일때 바꾸면 스카이블루, 스카이블루일때 바꾸면 아몬드색이 되어야한다..
    const backgroundColor =
        document.body.style.backgroundColor;
    const ALMOND = 'blanchedalmond';
    const SKYBLUE = 'skyblue'; //오타방지!
    let nextBackgroundColor;
    // 새로운 변수를 만들어서 저장
    // 그 후에 원래 값에 저장..!
    // 이렇게 하면 어떤 값이 들어와 있는 지 검사도 가능!

    if (backgroundColor === ALMOND) {
        nextBackgroundColor = SKYBLUE;
    } else {
        nextBackgroundColor = ALMOND;
    }

    document.body.style.backgroundColor =
        nextBackgroundColor;
}

window.addEventListener(
    'resize',
    handleWindowResize,
);
window.alert('하위!'); //직접 이벤트 지정도 가능하다

function handleWindowCopy() {
    alert('복사됨');
}
window.addEventListener('copy', handleWindowCopy);

// function handleWindowOffline() {
//     alert('오프라인 상태');
// }
// window.addEventListener(
//     'offline',
//     handleWindowOffline,
// );
// window.addEventListener(
//     'online',
//     handleWindowOnline,
// );
// function handleWindowOnline() {
//     alert('온라인 상태');
// }
