function convert(){
    var input = document.getElementById('input').value;
    var res = input.split('');
    var first = res.shift();
    res.push(first);
    res.push("ay");
    res = res.join(''); //make sure you don't write "res.join('')" as a separate statement. assign the value or return the new array
    document.getElementById('result').innerHTML = res;
}