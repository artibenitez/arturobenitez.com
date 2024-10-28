const images = [
    "images/header1.jpg",
    "images/header2.jpg",
    "images/header3.jpg",
    "images/header4.jpg",
    "images/header5.jpg",
    "images/header6.jpg",
    "images/header7.jpg",
    "images/header8.jpg",
    "images/header9.jpg",
    "images/header10.jpg",
];

const randomImage = images[Math.floor(Math.random() * images.length)];
document.getElementById('random-header-img').src = randomImage;