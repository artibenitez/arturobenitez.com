const images = [
    "images/header1.jpg",
    "images/header2.jpg",
    "images/header3.jpg"
];

const randomImage = images[Math.floor(Math.random() * images.length)];
document.getElementById('random-header-img').src = randomImage;