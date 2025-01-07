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
