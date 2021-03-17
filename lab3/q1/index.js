var var1 = setInterval(inTimer, 1000); //use timers
var fs = 5; //font size
var text = document.getElementById("text");
function inTimer() {
    text.innerHTML = 'TEXT GROWING'; //set text and style
    text.setAttribute('style', "font-size: " + fs + "px; color: red");
    fs += 5;
    if (fs >= 50) {
        clearInterval(var1); //clear the timer when font size is 50px
        var2 = setInterval(deTimer, 1000); //set the other timer
    }
}
//change the values in this function
function deTimer() {
    fs -= 5;
    text.innerHTML = 'TEXT SHRINKING';
    text.setAttribute('style', "font-size: " + fs + "px; color: blue");
    if (fs === 5) {
        clearInterval(var2);
    }
}