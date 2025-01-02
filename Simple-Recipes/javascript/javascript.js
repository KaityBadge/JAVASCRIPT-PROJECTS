//RECIPE POP UP MODAL SECTION   

//sets up the button that will open the recipe modal
//the query selected will target all HTML input elements
//that have modal-button class (so when user clicks on recipe button)
var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe
//the query selector targets all HTML elements with recipe-modal class
var modals = document.querySelectorAll(".recipe-modal");

//Closes all modals after 10 seconds
function hideModal() {
    setTimeout(function() {
        modals.forEach(function(modal) {
            modal.style.display = "none";
        });
    }, 10000);
}

//get the <span> element that closes the modal
//targets the close buttons on any of the modals
var closeBtn = document.getElementsByClassName("close-btn");

//defines which recipe modal will display when the button is clicked
//when the user clicks the recipe button, open the modal
for (var i = 0; i < btns.length; i++) {
    //the onclick event catches which button in the array of buttons
    // was clicked on and call a function that takes the event object as an argument
    btns[i].onclick = function (event) {
        ("href"));
        modal.style.display = "block";
    }
}

//When the user clicks on <span> (x), close the modal
//for loop iterates through the array of close buttons
//and find the correct one based on the index
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                //once the corresponding modal is targeted we change the display back to none
                modals[index].style.display = "none"
            }
        }
    }
}

//EMAIL VALIDATION

//targets the element with the id "contactForm"
//the event method "addEventListener" waits until and element
// the trigger of the event is the user clicking the submit button
    document.getElementById('contactForm').addEventListener('submit',
    function (event) {
        //overrides the default browser refresh when the submit button is pressed
        event.preventDefault();

        //variables to validate that each field is filled out
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        //Email pattern checks for all sympbols that would be needed
        //for an email address
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //use this variable to display messages if fields are filled out
        //or thank you message
        const valMsg = document.getElementById('validateMsg');

        //this 'if statement' is a conditional statement that checks if all fields
        //have been filled out .. the "||" means 'or'
        if(!firstName || !lastName || !phone || !message) {
            //check if fields have been filled out
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>'  
        } else if (!emailPattern.test(email)) {
            //checks if there is a valid email
            //the not operator '!' says if the email does not match the pattern
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email</p>'
        } else {
            //If all fields are filled out correctly display thank you message
            valMsg.innerHTML = '<p style="color: red;">Thank you for submitting!</p>'
        }

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };

        //displays what the user wrote in console
        //JSON is javascript object notation; a format for storing and sending data
        //stringify takes a javascript object and converts it to a JSON string
        console.log(JSON.stringify(formData))
    }
)