const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];
const randomImage = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement('img');

bgImg.src = `img/${randomImage}`;
//console.log(bgImg);

document.body.appendChild(bgImg);