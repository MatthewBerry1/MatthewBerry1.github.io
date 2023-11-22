// Initialize the slide index to 1

let slideIndex = 1;

// Call the showSlides function to display the initial slide

showSlides(slideIndex);

// Function to navigate to the next or previous slide

function plusSlides(n) {
  
 // Call showSlides with the updated slide index

    showSlides(slideIndex += n);

}

// Function to navigate to a specific slide

function currentSlide(n) {
  
 // Set the slide index to the specified value and call showSlides

    showSlides(slideIndex = n);

}

// Function to control the display of slides

function showSlides(n) {
  
    let i;
  
 // Get all elements with the class "mySlides" (representing slides)

    let slides = document.getElementsByClassName("mySlides");
  
 // Get all elements with the class "dot" (representing navigation dots)

    let dots = document.getElementsByClassName("dot");

// If the slide index is greater than the number of slides, set it to 1
  
    if (n > slides.length) {slideIndex = 1}

// If the slide index is less than 1, set it to the number of slides
  
    if (n < 1) {slideIndex = slides.length}

// Hide all slides
  
    for (i = 0; i < slides.length; i++) {
  
        slides[i].style.display = "none";
  
    }
    
// Remove the "active" class from all dots
  
    for (i = 0; i < dots.length; i++) {
   
        dots[i].className = dots[i].className.replace(" active", "");
  
    }

// Display the current slide
  
    slides[slideIndex-1].style.display = "block";

// Add the "active" class to the dot corresponding to the current slide
  
    dots[slideIndex-1].className += " active";

}

