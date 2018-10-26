function validateNum(num) {
    if (isNaN(num)) {
        return false;
    } else if (Number(num) >= 5 && Number(num) <= 20)
    return true;
    else
    return false;
}

var num = prompt("Please enter a number from 5 - 20.")
if (validateNum(num)) {
    var table = `<table border="1"><tbody>`;
    num = Number(num);
    for(var i = 0 ; i < num ;i++){
        table += "<tr>"
        for(var j = 0 ; j < num ;j++){
            if(i == 0){
                table += `<td style="background-color: green;">${i},${j}</td>`
            }
            else if(i == j){
                table += `<td style="background-color: yellow;" >${i},${j}</td>`
            }
            else{
                table += `<td>${i},${j}</td>`
            }
        }
        table += "</tr>"
    }
    table += "</tbody></table>";
    document.write(table);
} else {
    document.write(
        `<div style="color:red;">
        The valid input is a number between 5 and 20, please refresh your page to start again!
        </div>`);
    }
