var num = prompt("enter n1");

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
        square.push(j*j);
    }
}

alert(JSON.stringify(square));