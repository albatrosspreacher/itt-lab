var i=0;
var html = document.getElementById('tab').innerHTML;
for(i=0;i<=10;i++){
    html += `
<tr>
    <td>${i * i}</td>
    <td>${i * i * i}</td>
</tr>
`;
}
document.getElementById('tab').innerHTML = html;