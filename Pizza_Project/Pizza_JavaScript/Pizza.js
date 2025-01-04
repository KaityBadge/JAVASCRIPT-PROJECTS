function getReceipt() { 
    //This initializes our string so it can get passed
    //from function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    //sets index to 0, 0 is less than the length of the array,
    //i++ adds one to the index to continue through the for loop
    for (var i = 0; i < sizeArray.length; i++) {
        //if a box is checked off for one of the pizza sizes (sizeArray)
        if (sizeArray[i].checked) {
            //then set the variable "selectedSize" to the value of the checked box "sizeArray[i]"
            var selectedSize = sizeArray[i].value;
            //text1 will now say "<h3>You Ordered: </h3>" + whatever size was selected 
            text1 = text1+selectedSize+"<br>";
        }
    }
    //displays the total price for each pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 12;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    //displays size + price in console
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    //displays "<h3>You Ordered:</h3>" and the selected pizza size
    console.log("size text1: " + text1);
    //Display total price for pizza size
    console.log("subtotal: $" + runningTotal + ".00");
    //these variables will get passed on to each function
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            //.push adds new items to the end of an array
            //here .push adds toppings and updates value as toppings are selected
            selectedTopping.push(toppingArray[j].value);
            //displays the number of selected toppings in console
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        //if number or toppings is more than one, subtract 1 (one free topping)
        toppingTotal = (toppingCount - 1);
    } else {
        //otherwise if there is only one topping, make total 0 (one free topping)
        toppingTotal = 0;
    }
    //runningTotal is not the prize of pizza size plus price of each topping
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + 
    runningTotal + ".00" + "</strong></h3>";
};