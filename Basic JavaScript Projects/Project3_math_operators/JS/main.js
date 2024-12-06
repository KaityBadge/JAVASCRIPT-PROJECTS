//create a function that returns the result of an addition
//operation to the paragraph element with the id "Math"

function additionFunction() { //the name of the function is additionFunction
    var addition = 45 + 3;  //the variable called addition has a value of 45 + 3
    document.getElementById("Math").innerHTML = "45 + 3 = " + addition;
    //this tells the computer to find the element with the id "Math" in the HTML file
    //and gives that element the result of the operation
}


function subtractionFunction(){ //defines the name of the function so it can be called on   
    var subtraction = 34 - 65 ; //defines the varibale and values of the function
    document.getElementById("Subtract").innerHTML = "34 - 65 = " + subtraction;
    //tells the computer to find the element in the HTML file with the id "Subtract"
    // and print the string "34 - 65 =" then uses the + operator to concatenate the value of variable 'Subtraction'
}


function multiply() {
    var simple_Math = 3 * 10; 
    document.getElementById("Multiply").innerHTML = "3 x 10 = " + simple_Math;
    //finds the HTML element with the id "Multiply" and prints the string "3 x 10" then uses the + operator to add the simple_Math operation
}

function divideThis() {
    var division = 68 / 4;
    document.getElementById("Divide").innerHTML = "68 / 4 = " + division;
}

//created a function that uses different types of math operations and provide a result when called on
function multipleOperations() {
    var many_Operations = ((5 * 25) / 2 ) * 3 - 12;
    document.getElementById("Extra").innerHTML= "" + many_Operations;
}

//creates a function that finds the remainder of an equation by using the modulus operator
//modulus is another workd for remainder 
function modulus_Operator() {
    var remainder_Math = (25 % 6);  //the symbol % represents the modulus or remainder operator
    document.getElementById("Remainder").innerHTML= "When you divide 25 by 6 you get the remainder of: " + remainder_Math;

}

//create a function that uses the negation operator
// the negation operator returns the opposite or negative form of something
function negation_Operator() {
    var x = 35 ; //created a variable called x that has the value of 35
    document.getElementById("neg").innerHTML = -x; //the ' - ' symbol is the syntax for the negation operator
    // Tells computer to find the HTML element with the id "neg" and gives it the syntax for the negation operator followed by the variable name
}

//create a function that uses the increment operator
// the increment operator JavaScript syntax is ++ 
// ++ means to increase one time
function increment_Operator() {
    var Y = 8 ; //defines a varible called Y and give it the value of 8
    Y ++;  //tells the computer to take the variable Y and increment it one time
    document.getElementById("increaseOne").innerHTML = Y; 
}

//create a function that utilizes the decrement operator
//the decrement operator Javascript syntax is --
// -- means to decrease by one
function decrement_Operator() {
    var Z = 10; //defines the variable Z and sets its value to 10
    Z --; //tells the computer to take the variable Z and decrease by one
    document.getElementById("decreaseOne").innerHTML = Z;
}

//create a function that chooses a random number between 0 and 50
window.alert(Math.random() *50);

//create a function using a math object method
//rounds the number to the nearest integer
window.alert(Math.round(67.78));
