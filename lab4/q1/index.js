var num = prompt("enter n1"); //take input from a prompt dialog box

if (num != null) {
  document.getElementById("answer").innerHTML =
  fib(num).join(', ');
}

function fib(x){
    var fib = [0, 1, 1];
    var sum = 0;
    for(var i=0;i<x;i++){
        if(i>2){
            fib[i] = fib[i-1] + fib[i-2];
        }
    }
    return fib;
}

var n = prompt("enter n2");
var square = [];
if (n != null) {
    for(var j=1;j<=n;j++){
        square.push(j*j); //push in the array
    }
}

alert(JSON.stringify(square)); //print the array without commas. can also be done using the join() function
