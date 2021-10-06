const clock = document.querySelector('#clock');

function getClock() {
    const date = new Date();
    const hours = String(
        date.getHours(),
    ).padStart(2, '0'); //숫자로 받아와서 String으로 전환!
    const minutes = String(
        date.getMinutes(),
    ).padStart(2, '0');
    const seconds = String(
        date.getSeconds(),
    ).padStart(2, '0');

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //즉시 시전해주면 초기치 안나온다
setInterval(getClock, 1000);
