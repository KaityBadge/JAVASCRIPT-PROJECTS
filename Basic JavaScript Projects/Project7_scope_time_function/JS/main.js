//GLOBAL VARIABLE: the varibale is written outside of the function
var X = "What I want for Christmas is: "; 
//each function below is able to access this variable because it is global
function xmas_List_1(){
    document.write (X + "a rocking horse" + "<br>");
}
function xmas_List_2(){
    document.write (X + "a new skateboard");
}
xmas_List_1();
xmas_List_2();

//LOCAL VARIABLE: variable is written within a function
function Add_numbers_1(){
    var Z = 5; //This is a local variable written within the function
    //the computer was concatenating 10 + Z so I put it in parenthesis to single it out as an addition problem
    document.write ( "<br>" + (10 + Z) + "<br>");
}
function Add_numbers_2(){
    document.write ( 20 + Z); //will not display a result because Z is not defined within this function
    //cant access the variable Z because it is local only to the function it is written within
}
Add_numbers_1();
Add_numbers_2();

//METHOD ASSIGNMENT

function get_Date() {
    //if it is before 12 pm , the message will display
    if (new Date().getHours() < 12) {
        document.getElementById("Test").innerHTML = "You should take a 10 minute break";
    }
}

function make_Add() {
    //defines two local variables
    X = (2+2);
    Y = (3+1);
    //diplays the message if X is equal to Y
    if (X == Y) {
        document.getElementById("Equal").innerHTML = "X and Y have the same answer";
    }
}

//IF and ELSE statements
function cannabis_age_Function() {
    //assigns the value of 'Age' as whatever the use inputs
    Age = document.getElementById("guess_Age").value ; 
    if (Age >= 21) {
        //message will display if the value of Age (user input) IS greater than or equal to 21
        Legal = "You can legally purchase marijuanna on your own";
    }
    else {
        //message will display if the value of Age (user input) IS NOT greater than or equal to 21
        Legal = "You need a physicians signature to legally purchase";
    }
    //tells the computer to print the conditional statement
    document.getElementById("legal_Age").innerHTML = Legal;
}


//ELSE IF statements
function Time_Function() {
    var Time = new Date().getHours();
    var Reply ;
    //checks if the time is before 12 pm and after 12 am
    //Double equal sign compares data on left to data on right for equality
    if (Time < 12 == Time > 0) {
        Reply = "It's the morning time";
    }
    //checks if the time is 12 am or later and also before 6 pm 
    else if (Time >= 12 == Time < 18) {
        Reply = "It's the afternoon";
    }
    else { //if the time is not between either of the time frames
        Reply = "It's the evening"; 
    }
    //tells browser to display the proper Reply message when this function is called
    document.getElementById("Time.of").innerHTML = Reply;
    }


