// This is a function that includes assigning two variables
// it utilizes the document.getElementById method


//function is the element
//mouseOver is the HTML Event
//makes the text blue when hovered over HTML h1 element 
function mouseOver(){
    document.getElementById('OverOut').style.color = 'blue';
}
// the ID "OverOut" is what links the HTML element to the code
// I linked the h2 element in the index.html file

//function is the element
// mouseOut is the HTML Event
//makes the text black when hovered away from HTML h1 element
function mouseOut(){
    document.getElementById('OverOut').style.color = 'black';
}

//Creates a function to diplay text once the button is clicked
function onClick() {
    document.getElementById('clickme').innerHTML= "You clicked the button!";
}

//Creates a function to concantenate a string
function myFunction() {
    var sentence = "I am learning";
    sentence += " how to use JavaScript.";  //combines the 'sentence' variable and this string
    document.getElementById("Concatenate").innerHTML=sentence; //js code links to the p element in HTML file that has the same id
}

