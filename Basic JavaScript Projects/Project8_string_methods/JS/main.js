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