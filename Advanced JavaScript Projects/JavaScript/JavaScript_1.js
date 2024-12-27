function Name_Function() {
    var Name_Output;
    var Names = document.getElementById("name_Input").value;
    var Name_String = " is an interesting first name!";
    switch (Names) {
        case "Magnolia":
            Name_Output = "Magnolia" + Name_String;
        break;
        case "Jones":
            Name_Output = "Jones" + Name_String;
        break;
        case "Grey":
            Name_Output = "Grey" + Name_String;
        break;
        case "Beau":
            Name_Output = "Beau" + Name_String;
        break;
        case "Berny":
            Name_Output = "Berny" + Name_String;
        break;
        default:
            Name_Output = "Please enter a name from the list exactly as written."
    }
document.getElementById("Output").innerHTML= Name_Output;
}


//get element by class name function
function class_Function(){
    var A = document.getElementsByClassName("names");
    //set the index value of variable A to 0
    //changes the first element with class name "names"
    A[0].innerHTML= "Just kidding you don't get to choose my babys name";
}

//creates a variable to access the HTML canvas
var smlCanvas = document.getElementById("small_canvas");
//creates a 2D context object that lets you draw in the canvas
//getContext method returns an object with methods for drawing
var ctx = smlCanvas.getContext("2d");
//creates a gradient
var grd = ctx.createLinearGradient (0, 0, 170, 0);
grd.addColorStop (0, "rgba(19, 101, 8, 0.5)");
grd.addColorStop (1, "white");
ctx.fillStyle = grd;
ctx.fillRect(50, 50, 100, 100);