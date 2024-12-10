
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


//KEYWORDS AND CONSTRUCTORS

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() { 
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}


function Career (Salary, Benefits, Contract) {
    this.Career_Salary = Salary;
    this.Career_Benefits = Benefits;
    this.Career_Contract = Contract;
}

var Traveling_Nurse = new Career ("120,000", "full", "13 weeks" );
var Bank_Teller = new Career ("36,000", "standard", "temporary");
var FBI_Agent = new Career ("106,000", "full", "no");
function newFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "If you're thinking about becoming a traveling nurse, they do have "
    + Traveling_Nurse.Career_Benefits + " benefits and make around $"
    + Traveling_Nurse.Career_Salary
    + ". Just know that they typically have a contract of "
    + Traveling_Nurse.Career_Contract
}