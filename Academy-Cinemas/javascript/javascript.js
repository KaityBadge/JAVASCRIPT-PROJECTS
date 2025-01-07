//INITIALIZE POPOVERS
//thise variable targets all HTML elements with the custom data attribute listed below in the [square brackets]
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    //gets image path from 'data-bs-img' and passes it to the content variable
    var imgSrc = element.getAttribute('data-bs-img');
    //holds the HTML img tag to insert img when popover is triggered
    //applies CSS class selector 'star-rating' directly to image
    var content = "<img class='star-rating' src='" + imgSrc +" '>";
    new bootstrap.Popover(element, {
        //sets content of popover to the content variable defined above
        //the content variable contains the HTML string for the image 
        content: content,
        //indicates that the content is in fact HTML
        html: true,
        //sets trigger event of the popover to show when user hovers over the element
        trigger: 'hover'
    });
});

//INITIALIZE TOAST
//.map function iterates over each element of the array and applies
//a call back function to each element
//collects results of call back function into a new array
var toastE1List = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
});

//Function to display toast with selected options
function displaySelectedMovieOptions() {
    //.options property is used to select from HTML select option elements
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    //Display toast
    //new variable gets the HTML element with CSS class selector 'toastBody'
    var toastBody = document.getElementById('toastBody');
    //sets a new value for toastBody and sets it to the var message declared above
    toastBody.textContent = message;
    //creates a new instance of toast associated with the element with ID 'toastDisplay'
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
};

//Tells browser to run this function when buyTickets button is pressed
function buyTickets() {
    displaySelectedMovieOptions();
};


//JQUERY

//shrinks header size when document is scrolled down by 80 pixels
$(document).on("scroll", function () {
    //when the webpage is scrolled down from the top by 50px
    //this if statement is triggered
    if ($(document).scrollTop() > 50) {
        //if the scroll is more than 50px
        //add the nav-shrink class selector to the same HTML element
        //that has the nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the mobile drop menu
        //to accomodate the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //if the webpage hasn't been scrolled down
        //or if it is back at the top
        //the nav-shrink class selector is removed from the HTML element with nav class
        $("nav").removeClass("nav-shrink");
        //the margin for the drop down menu is returns to it's original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
}); 

//close mobile menu when a nav link is clicked
$(document).ready(function () {
    //on click when an element contains just the nav-link class and not the dropdown-toggle
    //and closes when an element with the class .dropdown-item (movie links) is clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function() {
        //collapse the navbar when a link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});