const API_KEY =
    '6ed6149c53e658374bf2d73adc628eef';

async function onSuccess(item) {
    const lat = item.coords.latitude;
    const lon = item.coords.longitude; // 위도, 경도
    //날씨 및 지도 API

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // const googlemap = `http://www.google.com/maps/search/?api=&query=${lat}%2C${lon}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        const temp =
            document.querySelector('p.temp');
        const location =
            document.querySelector('p.location');

        temp.innerText = `${data.main.temp}도씨 / ${data.weather[0].main}`;
        location.innerText = `${data.name}`;
    } catch (e) {}

    //---------------.then()
    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         const temp =
    //             document.querySelector('p.temp');
    //         const location =
    //             document.querySelector(
    //                 'p.location',
    //             );

    //         temp.innerText = `${data.main.temp}도씨 / ${data.weather[0].main}`;
    //         location.innerText = `${data.name}`;
    //     })
    //     .finally(console.log('yes!'));
}
function onError(e) {
    console.log(e);
    alert('현재 위치를 찾을 수 없습니다.');
}

//성공했을 때(콜백함수), 실패했을 때(콜백함수)
navigator.geolocation.getCurrentPosition(
    onSuccess,
    onError,
);

// const KAKAO_API_KEY =
//     'ba5c9389a9bd74ad7adb333f463d53a3';
// const kakaomap = `//dapi.kakao.com/v2/maps/sdk.js?appkey=ba5c9389a9bd74ad7adb333f463d53a3`;

// fetch(googlemap)
//     .then((res) => console.log(res))
//     .catch((e) => console.log(e))
//     .finally((e) => console.log('finally'));
//.then() 성공했을 때 // .catch() 실패했을 때 // .finally() 두 처리가 모두 끝내면 할것
