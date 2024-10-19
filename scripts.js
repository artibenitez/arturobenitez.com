const images = [
    "images/art1.jpg",
    "images/art2.jpg",
    "images/art3.jpg",
    "images/art4.jpg",
    "images/bronx.jpg",
    "images/deskspace.jpg",
    "images/fuji.jpg",
    "images/hand.jpg",
    "images/hitchcock.jpg",
    "images/jwebb.jpg",
    "images/minecraft.jpg",
    "images/monitor.jpg",
    "images/next.jpg",
    "images/shuttle.jpg",
    "images/sr71.jpg",
    "images/terminator.jpg"
];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.getElementById('random-header-img').src = randomImage;