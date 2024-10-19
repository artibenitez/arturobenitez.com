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

let slideIndex = 0;

// Function to show the current slide
function showSlide(index) {
    let slides = document.getElementsByClassName("photos");

    // Loop through all slides and hide them
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all images
    }

    // Adjust index to loop if it goes beyond the number of slides
    if (index >= slides.length) {
        slideIndex = 0; // Reset to first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Go to last slide
    }

    // Display the current slide
    slides[slideIndex].style.display = "block"; // Show the current image
}

// Initial call to show the first slide
showSlide(slideIndex);

// Add click event listener to all images
document.addEventListener("DOMContentLoaded", function() {
    let slides = document.getElementsByClassName("photos");

    // Loop through each slide to add a click event listener
    for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener("click", function() {
            slideIndex++; // Increment the slide index
            showSlide(slideIndex); // Show the next slide
        });
    }

    // Show the first slide initially
    showSlide(slideIndex);
});



