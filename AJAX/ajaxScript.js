function getMsg() {
    //STEP 1: Setup the XML HTTP Request object

    let ajaxRequest = new XMLHttpRequest();

    //get input value of name to display to user after
    //request has been made
    let inputVal= document.getElementById("fullName").value;

    //Function to display user input value once request
    //has been received
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you " +
        inputVal + " for signing up!";
    }
    //The function defined after the onload event is a call back function
    //its purpose is to execute code in response to an event
    //the event here is the onload method which is when server data has been loaded

    //STEP 2: Prepare the type of request and what to request from the server
    //calls the open method to inform the server of the type of request
    //and establishes a connection with the server
    //'GET' is the type of request
    //'response.html' is the URL for the file being requested
    // true is means that the request IS handled asynchronously
    ajaxRequest.open('GET', 'response.html', true);

    //STEP 3: Defines the AJAX response callback method that establishes
     //whether the response was successful and where the data should display
    //onreadystatechange is a property of the XMLHttpRequest object
    //is used to define a function to be called when the ready state changes
    ajaxRequest.onreadystatechange = function() {
        //defines the call back method
        //value 4 of the ready state means the request has been completed and response is ready
        //a status code of 200 indicates a successful response
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML = 
            ajaxRequest.responseText; //responseText contains the recieved response of the response.html file
        }
    } //This block of code says if the request is completed and was successful
       // then display the 'response.html' in the HTML element with id 'content'
    
    //STEP 4: Send the request
    ajaxRequest.send();
}