function convert(){
    var input = document.getElementById('input').value;
    var res = input.split('');
    console.log(res);
    var first = res.shift();
    console.log(first);
    console.log(res);
    res.push(first);
    console.log(res);
    res.push("ay");
    res = res.join('');
    document.getElementById('result').innerHTML = res;
}