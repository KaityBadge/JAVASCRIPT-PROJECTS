//form validation
//alert message will display if the snack field is not filled out by user
function validateForm(){
    let x = document.forms["foodForm"]["snack"].value;
    if (x == ""){
        alert("Please enter your favorite snack");
        return false;
    }
}

