const images = ["0.jpg", "1.jpg", "2.jpg"];
//const images = ["img/0.jpg", "img/1.jpg", "img/2.jpg"];
const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randomImage}`;
console.log(bgImg);
bgImg.style.width = "100px";
bgImg.style.height = "100px";

//document.body.style.backgroundImage = randomImage;
//document.body.style.backgroundImage = "url(randomImage)";
//document.body.appendChild(bgImg);
//const aaa = document.querySelector("#images");
