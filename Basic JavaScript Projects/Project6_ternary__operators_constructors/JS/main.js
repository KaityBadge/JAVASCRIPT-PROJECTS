
function Ride_Function(){
    var Height, Can_ride; //creates two variables
    //defines Height variable as having the value of what is entered into th input field with the id "Height"
    Height = document.getElementById("Height").value;
    //defines Can_ride variable is the 'Height' variable < 52
    //the ? tells the computer which value to assign based on the condition
    //the condition here is if the value of 'Height' is less than 52
    //if the condition is true, the computer will display the first statement, if false it displays the second statement
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    //tells the computer to display the condition 
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


function Vote_Function(){
    var Age, can_vote; //creates two variables
    // Defines the first variable
    Age = document.getElementById("Age").value;
    //Defines second variable
    can_vote = (Age < 18) ? "You are not old enough" : "You are old enough";
    //Displays a message depending on the condition of Age < 18
    document.getElementById("VOTE").innerHTML = can_vote + " to vote in the U.S.";
}