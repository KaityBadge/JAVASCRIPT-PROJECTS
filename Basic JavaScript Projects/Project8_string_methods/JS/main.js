//create a function to combine strings
function full_Sentence() {
    var part_1 = "I want " ; 
    //add a space before end quote so when the strings are combined, they dontdisplayliekthis
    var part_2 = "this sentence " ;
    var part_3 = "to display " ;
    var part_4 = "as one full " ;
    var part_5 = "sentence." ;
    //defines the variable and tells computer to take part_1 and
    //concatenate it with whats in the parenthesis
    var full_Sentence = part_1.concat (part_2, part_3, part_4, part_5) ;
    document.getElementById ("concat.that").innerHTML = full_Sentence;
}


//Creates a function that uses the slice method
function slice_Method() {
    //the variable "Sentence" has a string value
    var Sentence = "This sentence will not display in full because the code below will slice out specified characters" ;
    //.slice tells the computer which characters to 'cut out'
    var Section = Sentence.slice (67, 100);
    //tells the computer to display the contents of the variable "Section" (sliced out characters)
    document.getElementById("Slice").innerHTML = Section ;
}

//Creates a function that converts a number to a string
function string_Method() {
    var X = 3600 ; //Gives X a number value
    //.toString tells the computer to convert the variable "X" from a number to a string representation
    document.getElementById("Number_to_String").innerHTML = X.toString();
    //this is useful because once a number is converted to a string, we can perform string operations on it (like concatenating)
}  

//Creates a function that uses .toPrecision method 
function precision_Method() {
    var Y = 1.2
    //.toPrecision formats the number to the TOTAL specified length of numbers
    //in this example it is (5) so we count to 5 number spaces which is 1.2000
    document.getElementById("Precision").innerHTML = Y.toPrecision (5);
}   

//Creates a function that uses .toFixed method 
function tofixed_Method() {
    var Z = 1.2
    //.toFixed formats the number to a FIXED number of digits AFTER the decimal
    //in this example we will count 5 digits after the decimal which is 1.20000
    document.getElementById("Fixed").innerHTML = Z.toFixed (5);
}   

//Create a function that uses the .valueOf method
function valueof_Method() {
    var W = 1.2
    document.getElementById("value").innerHTML = W.valueOf;
    //.valueOf returns the primitive value of the string object
}