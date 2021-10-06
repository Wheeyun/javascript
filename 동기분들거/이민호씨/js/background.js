const images = ['0.jpg', '1.jpg', '2.jpg'];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement('img');

console.log(bgImg);

bgImg.src = `img/${randomImage}`;

document.body.appendChild(bgImg);