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


//Window will display 'infinity' because the number is larger than the maximum floating point
//floating point limit is 1.797693134862315E308

document.write(1.9E308)

//window will display negative infinity because the number is smaller than the negative floating point
document.write(-2E309)


//BOOLEAN LOGIC

//Uses Boolean logic to display "true"
document.write(12>=10)

//Uses Boolean logic to display "false"
document.write(5>8)


//Displays result in the console, NOT on the HTML page itself
console.log(45 +10);
//Using boolean logic to display in console
console.log(16>18);

//Double Equal Signs to compare equality of left and right side of ==
//using the document.getElementById method so I can choose where it displays on the HTML page
function equalityCheck(){
    document.getElementById("doubleEqual").innerHTML = (57 == 56+1);
}

//Triple equal sign tells computer to compare the value and value type
function tripleEqual(){
    //returns "true" because the data type and data itself are the same
    document.getElementById("dataMatch1").innerHTML= ("this is a string" === "this is a string");
    //returns "false" because the data types and data itself on the left and right side are not the same
    document.getElementById("dataMatch2").innerHTML= ("56" === 58);
    //returns "false" because the data types on each side are different even though the data values are the same
    document.getElementById("dataMatch3").innerHTML= ("56" === 56);
    //returns "false" because the data types are the same but the values are different
    document.getElementById("dataMatch4").innerHTML= ("this string says one thing" === "this string says something else");
}