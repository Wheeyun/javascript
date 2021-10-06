const images = ['0.jpg', '1.jpg', '2.jpg'];

const randomImage =
    images[
        Math.floor(Math.random() * images.length)
    ];

const bgImg = document.createElement('img');
console.log(randomImage);

bgImg.src = `img/${randomImage}`;
bgImg.width = 350;

console.log(bgImg.src);

document.body.appendChild(bgImg); //맨 뒤에 //prepend() 맨 위에
