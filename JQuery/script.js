//$ is a symbol to access jQuery
//(document) is the selector that targets the entire HTML document
//specifies that the document should finish loading and be ready before code is executed
//function is an argument that tells browser to run the code within {}
$(document).ready(function(){
    function shineLoop() {
        //targets any HTML element with the CSS class ".shine"
        //uses the animate method to modify the CSS property "backgroundPositionX"
        //moves 1600 pixels along the X axis
        //3000 duration is 3 seconds
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000)
        .animate({backgroundPositionX: '-800px'}, 3000);
    };

    //repeats the shineLoop function with a duration of 0 seconds between repetition
    setInterval(shineLoop, 0);

    //on method is used to handle one or more event handler functions
    //scroll argument is the event that triggers an action (function is called when user scrolls on page)
    $(document).on("scroll", function(){
        //if user scrolls down more than 50 pixels then add the class "header-scrolled" to the h1 element 
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({
        //use mouseenter event with the .on method
        //when users mouse enters any div area with the #classicCars ID
        //the function is called and triggers images to slide down one after the other
        //the colon : is used to define mouseenter as an object literal
        mouseenter: function() { //call back function
            //uses JQUERY to target each title ID
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //triggers the images to slide up and hide each title one after the other
        //when the users mouse leaves the div area with the #classicCars ID
        mouseleave: function(){
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //Creates a toggle effect on each FAQ question by checking each elements sibling
    //so they dont all display when on question is clicked.
    //targets multiple div elements with the same class 'question' BUT DOES IT ONE AT A TIME
    //uses .on event method with the 'click' event handler
    $('div.question').on('click', function() {
        //'this' keyword refers the element with the quesiton class that was clicked
        //'.next' method returns the next sibling element to the div.question element which is the div.answer element
        $(this).next().slideToggle('slow'); 
    });

})