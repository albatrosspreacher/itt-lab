function calc() {
    var num1 = parseInt(document.getElementById('num1').value); //get and convert the input from string to int value
    var num2 = parseInt(document.getElementById('num2').value);
    var num3 = num1 + num2;
    alert(num3);
    tableCreate(num3); //pass the sum as a parameter
}

function tableCreate(num3) {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var html = '';  //add all the inner html content in this variable
    var i = 1;
    for(i=1;i<=10;i++){
        html = `
    <tr>
                    <td style="color:red">
                        ${num3}
                    </td>
                    <td style="color:blue">
                        ${i}
                    </td>
                    <td style="color:red">
                        ${num3 * i}
                    </td>
                </tr>
    `;
    document.getElementById('tab').innerHTML += html; //keep appending to the previous row to complete the multiplication table
    }
}