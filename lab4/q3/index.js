function moveUp(x){
    var temp = document.getElementById('p1').innerHTML;
    document.getElementById(`p1`).innerHTML = document.getElementById(`p${x}`).innerHTML;
    document.getElementById(`p${x}`).innerHTML = temp;
}

function rearrange(){
    document.getElementById('p1').innerHTML = `
    Ut consequuntur totam et iusto deserunt quia. In aspernatur error atque recusandae repudiandae velit nobis ipsa.
    Tenetur quia provident voluptatibus illo aut inventore deleniti. Ea aspernatur totam numquam itaque sed placeat
    occaecati. Veritatis aliquid corporis itaque ut animi et.
    `;
    document.getElementById('p2').innerHTML = `
    Accusamus et est numquam impedit quos consequatur. Corrupti veniam nihil numquam nisi ea ab. Expedita dolores
        eos et.
    `;
    document.getElementById('p3').innerHTML = `
    Quia sint sit qui nam aperiam. Molestiae explicabo quaerat voluptatem. Animi quisquam hic rerum aut. Iure
        excepturi ipsam error doloremque rerum delectus illo facilis. Officia modi eos tempore voluptatem.
    `;
}
