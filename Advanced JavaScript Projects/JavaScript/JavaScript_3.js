function displayType(name) {
    var nickName = name.getAttribute ("data-nick-name") ;
    alert (nickName + " is short for " + name.innerHTML);
}