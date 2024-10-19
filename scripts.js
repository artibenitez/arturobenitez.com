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

const photos = [
    "photographs/photo1.jpg",
    "photographs/photo2.jpg",
    "photographs/photo3.jpg",
    "photographs/photo4.jpg",
    "photographs/photo5.jpg"
];

let currentPhotoIndex = 0;

// Function to show the current photo
function showPhoto(index) {
    const photoElement = document.getElementById('current-photo');
    photoElement.src = photos[index]; // Update the image source
}

// Function to handle the click event
document.getElementById('current-photo').addEventListener('click', function() {
    currentPhotoIndex++; // Move to the next photo
    if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0; // Loop back to the first photo
    }
    showPhoto(currentPhotoIndex); // Show the new photo
});

// Initial call to show the first photo
showPhoto(currentPhotoIndex);






