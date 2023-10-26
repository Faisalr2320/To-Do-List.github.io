function getandupdate(){
    console.log("updating list...");
tit = document.getElementById('title').value;
desc = document.getElementById('Description').value;
if (localStorage.getItem('itemsJson') == null) {
    ItemJsonArray = [];
    ItemJsonArray.push([tit, desc]);
    localStorage.setItem('itemsJson', JSON.stringify(ItemJsonArray));
}
else {
    ItemJsonArraystr = localStorage.getItem('itemsJson');
    ItemJsonArray = JSON.parse(ItemJsonArraystr);
    ItemJsonArray.push([tit, desc]);
    localStorage.setItem('itemsJson', JSON.stringify(ItemJsonArray));
}
update();
}
function update(){
if (localStorage.getItem('itemsJson') == null) {
    ItemJsonArray = [];
    localStorage.setItem('itemsJson', JSON.stringify(ItemJsonArray));
}
else {
    ItemJsonArraystr = localStorage.getItem('itemsJson');
    ItemJsonArray = JSON.parse(ItemJsonArraystr);
}
// Populate the table
let tablebody = document.getElementById('tablebody');
let str = "";
ItemJsonArray.forEach((element, index) => {
    str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
            </tr>`;
});
tablebody.innerHTML = str;
title.value = "";
Description.value = "";
}
add = document.getElementById('Add');
add.addEventListener("click", getandupdate);
update();   
function deleted(itemindex){
    console.log("deleted", itemindex);
    ItemJsonArraystr = localStorage.getItem('itemsJson');
    ItemJsonArray = JSON.parse(ItemJsonArraystr);
    ItemJsonArray.splice(itemindex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(ItemJsonArray));
    update();
}
function cleared(){
    if (confirm("Do you really want to clear?")){
    localStorage.clear();
    console.log("clearing the list");
    update();
}}