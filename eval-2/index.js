function calc() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var num3 = num1 + num2;
    alert(num3);
    tableCreate(num3);
}

function tableCreate(num3) {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var html = '';
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
    document.getElementById('tab').innerHTML += html;
    }
}