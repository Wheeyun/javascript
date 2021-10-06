const API_KEY = "cd01aa7808c8624585dc106b847e7086";

async function onSuccess(item) {
  const lat = item.coords.latitude;
  const lon = item.coords.longitude;
  //날씨API,지도API,
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // const ulrMap = `https://www.google.com/maps/search/api=1&query=${lat}`;
  // try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);
  // } catch (e) {

  // } finally { }

  fetch(url)
    .then(res => res.json()) //json의 리턴값이 promise니까 then.
    // .then(data => console.log(data));
    .then(data => {
      const temp = document.querySelector(".temp");
      const location = document.querySelector(".location");

      temp.innerText = `${data.main.temp}℃/${data.weather[0].main}`;
      location.innerText = data.name;
    });
}

function onError(e) {
  console.log(e);
  alert("현재 위치를 찾을 수 없습니다");
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
