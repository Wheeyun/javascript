const clock = document.querySelector('#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 화면전환 시 getClock() 불러온 후, 1초 간격으로 새로 호출
getClock();
setInterval(getClock, 1000);