//creates a dictionary containing key value pairs (KVP)
function clothingDictionary() {
    var Pants = {
        Size : "Large",
        Color : "Tan",
        Texture: "Cordouroy",
        Length: "Long", 
    };
    //removing a value from the dictionary will return the result "undefined"
    delete Pants.Texture;
    //utilizing this method will output the value for the key name "texture"
    //since we deleted this value it will display the words "undefined"
    document.getElementById("Dictionary").innerHTML = Pants.Texture;
}