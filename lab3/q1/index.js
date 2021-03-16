var var1 = setInterval(inTimer, 1000);
var fs = 5;
var text = document.getElementById("text");
function inTimer() {
    text.innerHTML = 'TEXT GROWING';
    text.setAttribute('style', "font-size: " + fs + "px; color: red");
    fs += 5;
    if (fs >= 50) {
        clearInterval(var1);
        var2 = setInterval(deTimer, 1000);
    }
}

function deTimer() {
    fs -= 5;
    text.innerHTML = 'TEXT SHRINKING';
    text.setAttribute('style', "font-size: " + fs + "px; color: blue");
    if (fs === 5) {
        clearInterval(var2);
    }
}