//creates the countdown timer
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1 ;
        timer.innerHTML = seconds;
        var time = setTimeout (tick, 1000);
        if (seconds == -1) {
            alert ("Times up!");
            clearTimeout (time);
            timer.innerHTML = " ";
        }
    }
    tick();
}

// Slideshow 

//setting the slideIndex to 1 tells comp to start with the first image
let slideIndex = 1;
showSlides(slideIndex); //displays the slide based on the slideIndex

//Next/previous controls (navigates between slides) 
//This function is called when the "prev" and "next" buttons are clicked
function plusSlides(n) {
    showSlides(slideIndex += n); //updates the slide index based on user clicking next/prev buttons
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
function showSlides(n) {
    let i; //this variable is for adding

    //the varibale 'slides' selects the mySlides element from the HTML
    let slides = document.getElementsByClassName("mySlides");

    //selects the dot element from the HTML
    let dots = document.getElementsByClassName("dot");

    //if the number passed to the function is greater than the
    //length/number of the slides, then the slideIndex is set to 1
    //sets the slideIndex to 1 when we reach the end of the slides
    if (n > slides.length) {slideIndex = 1}

    //if the number passed to the function is less than the
    //length/number of slides, then the slideIndex is set to the number of slides
    if (n < 1) {slideIndex = slides.length}

    //display style is set to 'none' to  hide the slides
    //this will be done to each slide in the slideshow
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //goes through all of the dots
    //.replace will remove the class name 'active'. replaces it with " " (an empty quotation so it is essentially replaced with nothing)
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    //sets the display style of the slides before -1 to 'block'
    slides[slideIndex-1].style.display = "block";

    //sets the class name of the dot before -1 to 'active'
    dots[slideIndex-1].className += " active";
}
