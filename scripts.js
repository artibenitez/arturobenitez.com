const images = [
    "art1.jpg",
    "art2.jpg",
    "art3.jpg",
    "art4.jpg",
    "bronx.jpg",
    "deskspace.jpg",
    "fuji.jpg",
    "hand.jpg",
    "hitchcock.jpg",
    "jwebb.jpg",
    "minecraft.jpg",
    "monitor.jpg",
    "next.jpg",
    "shuttle.jpg",
    "sr71.jpg",
    "terminator.jpg"
];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.getElementById('random-header-img').src = randomImage;