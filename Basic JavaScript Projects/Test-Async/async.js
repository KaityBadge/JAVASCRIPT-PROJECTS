alert(document.getElementById("heading").innerHTML);

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
    document.getElementById ("concatenates").innerHTML = full_Sentence;
}