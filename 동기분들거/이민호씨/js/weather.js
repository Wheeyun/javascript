const API_KEY = '698f56f74931dadc673625f0edc92979';

function onSuccess(item){
    const lat = item.coords.latitude;
    const lon = item.coords.longitude;
    //날씨 API, 지도 API...

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // API : http://api.openweathermap.org/data/2.5/weather
    // query : ?lat=${lat}&lon=${lon}&appid=${API_KEY}
    // const ulrMap = 'map_key'

    //weather api
    fetch(url)
        .then(res => res.json())
        .then((data) => {;
            console.log(data);
            const temp = document.querySelector('p.temp');
            const location = document.querySelector('span.location');

            temp.innerText = `${data.main.temp}℃ / ${data.weather[0].main}`;
            location.innerText = data.name; 
        });
        
    //map api    
    // console.log(ulrMap);
    // fetch(ulrMap).then((res) => console.log(res))
    //              .catch((e) => console.log(e))
    //              .finally((e) => console.log('일단은 됐다'));
}

function onError(e){
    console.log(e);
    alert('현재 위치를 찾을 수 없습니다');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);