function Call_Loop() {
    Digit = "" ;
    let x = 1;
    //loop will run as long as x is less than 5
    while (x < 5) {
        Digit += "<br>" + x;
        x ++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//Return the length of a string
function find_Length() {
    let sentence = "This is my test sentence.";
    let length = sentence.length;

    document.getElementById("test").innerHTML = length;
}

//Creates a variable called Instruments with multiple values
//Creates a variable called Content has a defined value left empty to be used later
//Creates a variable called Y to be a placeholder for teh variable used in the loop
var Instruments = ["Guitar", "Drums", "Bass", "Piano", "Flute"];
var Content = "";
var Y ; 
//creates a function. This is where iteration of the Instruments occurs
function for_Loop() {
    //set Y to value of 0 which is the first index of the array;
    //Loop repeats as long as Y is less than the length of the array;
    //Y is incrementing by 1, this is for iteration
    for (Y = 0 ; Y < Instruments.length ; Y ++ ) {
        //accessess the current element of the array based on the value of Y
        Content += Instruments [Y] + "<br>" ;
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


//object of array[index number] = property of array
function array_Function() {
    var grocery_List  = [];
    grocery_List[0]= "Milk";
    grocery_List[1]= "Eggs";
    grocery_List[2]= "Chips";
    grocery_List[3]= "Fruit";
    grocery_List[4]= "Lettuce";
    document.getElementById("Array").innerHTML =
    "What we really need from the store is, " + grocery_List[3] + "!";
}


//creates an object by using the const keyword
function constant_Function() {
    //the const keyword creates an object called sparkling_Water
    //I added properties (vessel, brand, flavor) and gave each of them values (can, Trader Joe's, black cherry vanilla)
    const sparkling_Water = {vessel:"can", brand:"Trader Joe's", flavor:"black cherry vanilla"};
    //added a property (size) and gave it a value
    //changed the value of two properties (flavor and brand)

    sparkling_Water.size = "12 OZ" ;
    sparkling_Water.flavor = "clementine";
    sparkling_Water.brand = "La Croix";
    document.getElementById("Constant").innerHTML = 
    "My favorite bubbly water is a " + sparkling_Water.vessel + " of " + sparkling_Water.brand ; 
}

//Uses the let keyword to declare a variable with a block scope
//the block of code inside the curly brackets is only accessed when inside the brackets
var X = "I wish it was raining. ";
document.write (X);
//the let keyword cannot be accessed outside of the curly brackets
{
    let X = "It's not going to rain today. ";
    document.write(X);
}
document.write(X); 


//once the return statement is reached, the function will stop executing and return the specified value to the code that called the function
function multiply_Numbers(a, b) {
    return a * b ;
}
let sum = multiply_Numbers(10, 5);
document.write(sum);


//creates an object called "vacation"
//gives the object properties
//stores a method within the properties 
//a method is actions that can be performed on the object
let vacation = {
    destination : "Hawaii ",
    year : "2025 ",
    month : "February ",
    trip_length : "10 days ",
    theMethod : function() {
        return "I am going to " + this.destination + "for " 
        + this.trip_length + "in " +this.month + this.year;
    }
};
document.getElementById("vaca_trip").innerHTML = vacation.theMethod();

//when i equals 6 in Loop 2 the break statement will jump out of loop 1 and continue with loop 2
let numbers = "" ;
//this is the first for loop
Loop_1:
for (let i = 0; i < 5 ; i ++ ) {
    numbers += i + "<br>";
    //second for loop (Loop 2)
        for (let i = 4; i < 10; i ++) {
        numbers += i + "<br>" ; 
        if (i === 6) break Loop_1;
    }
}
document.getElementById("test_break").innerHTML = numbers; 


//The number 5 will not display in browser
//if i equals 5 then continue statement will skip the number 5 and continue to the next iteration in the loop
let text = ""
for (let i = 0 ; i < 10; i ++) {
    if (i === 5) {continue;}
    text += i + "<br>";
}
document.getElementById("test_continue").innerHTML = text;