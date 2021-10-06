const API_KEY = '91b80868d273309f81f8ccc9605e0872';

// function onSuccess(item) {
//     // console.log(item);
//     const lat = item.coords.latitude;
//     const lon = item.coords.longitude;

//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;    
//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//             const temp = document.querySelector('p.temp');
//             const location = document.querySelector('p.location');

//             temp.innerText = `${data.main.temp}도 / ${data.weather[0].main}`;
//             location.innerText = data.name;
//         });    
// }

async function onSuccess(item) {
    // console.log(item);
    const lat = item.coords.latitude;
    const lon = item.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;    
    //const url = `https://api.openweathermap.org/data/2.5/weather?q=nepal&appid=${API_KEY}&units=metric`;

    // 비동기 처리 : Promise로 넘어오는 것 await로 처리 후 진행
    try {
        //const data = await (await fetch(url)).json();
        const res = await fetch(url);
        const data = await res.json();
        //console.log(data);

        const temp = document.querySelector('p.temp');
        const location = document.querySelector('p.location');

        temp.innerText = `${data.main.temp}도 / ${data.weather[0].main}`;
        location.innerText = data.name;

        console.log("오늘의 날씨 : " + data.weather[0].main);
        const header = document.querySelector('header');
        switch (data.weather[0].main) {
            case 'Clear':
                header.style.backgroundImage = "url('img/Clear.jpg')";
                break;
        
            case 'Clouds':
                header.style.backgroundImage = "url('img/Clouds.jpg')";
                break
            
            case 'Rain':
                header.style.backgroundImage = "url('img/Rain.jpg')";
                break
            
            default:
                break;
        }

    } catch (e) {
        console.log(`오류 : ${e}`);
    } finally {

    }
}



function onError(e) {
    console.log(e);
    alert('현재 위치를 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);