var form = document.querySelector('.myForm');
var table = document.getElementById('tableInfo');
function formData() {
    var name = form.children[0].children[2].value;
    var reg = form.children[1].children[2].value;
    var fac = form.children[2].children[2].value;
    var dept = form.children[3].children[2].value;
    var level = form.children[4].children[2].value;
    var date = form.children[5].children[2].value;
    var time = form.children[5].children[4].value;
    var dt = date+" / "+time;

    var tr = document.createElement("tr");
    var td = [name,level,reg,fac,dept,dt];

    for (let i = 0; i < td.length; i++) {
        var newCell = document.createElement("td");
        newCell.textContent = td[i];
        tr.appendChild(newCell);
    }
    console.log(table.appendChild(tr));    
}
