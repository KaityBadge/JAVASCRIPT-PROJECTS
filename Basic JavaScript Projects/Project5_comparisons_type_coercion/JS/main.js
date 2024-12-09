//displays "string" because that is the data type of "word"
document.write(typeof "Word") ;

//displays "boolean" because it is the type of data that false is
document.write(typeof false);


//Using two different data types within an operation
//TYPE COERCION- when the operands are different data types

//"8" is string data because it is in quotations
//this combines string data with integer data to get: 84
document.write("8" + 4);

//If we use actualy words in the string
//The output is : eight4
document.write("eight" + 4);


//I named this function NewFunction
function NewFunction() {
    //the result displays when the id name "practice" is associated with and HTML element
    //this code tells the computer to divide 9 by 0 and display the result
    //the result is NaN because 9/0 is not a number
    document.getElementById("practice").innerHTML = 9/0 ; 
}


//Using the NaN (not a number) Function to check if something is true or false
//isNaN() displays true or false if the content in the parenthesis is a number or not a number

function test_NaN() {
    //isNaN function determines that the parenthesis following the isNaN function 
    //is in fact NOT A NUMBER (NaN) so the browser will display the word 'true'
    document.getElementById("Test_1").innerHTML = isNaN('these words make this sentence a string');
}

function test2_NaN() {
    //isNaN function will determine that 567 IS A NUMBER so browser will display the word false
    document.getElementById("Test_2").innerHTML = isNaN('567');
}