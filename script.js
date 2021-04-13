var selectedRow = null

function onFormSubmit(){
	var formData = readFormData();
	if (selectedRow == null)
	    insertNewRecord(formData);
	    else
	    	updateRecord(formData);

resetForm();

}

function readFormData(){
	var formData = {};
	formData["firstName"] = document.getElementById("firstName").value;
	formData["lastName"] = document.getElementById("lastName").value;
	formData["email"] = document.getElementById("email").value;
	formData["gender"] = document.getElementById("gender").value;
	formData["check"] = document.getElementById("check").value;
	return formData;
}

function insertNewRecord(data){
	var table = document.getElementById("head").getElementsByTagName("tbody")[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.firstName;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.lastName;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.email;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.gender;
	cell5 = newRow.insertCell(4);
	cell5.innerHTML = data.check;
    cell6 = newRow.insertCell(5);
	cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm(){
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("email").value = "";
	document.getElementById("gender").value = "";
	document.getElementById("check").value = "";
	selectedRow = null;
	}
function onEdit(td){
	selectedRow = td.parentElement.parentElement;
	document.getElementById("firstName") == selectedRow.cells[0].innerHTML;
	document.getElementById("lastName") == selectedRow.cells[1].innerHTML;
	document.getElementById("email") == selectedRow.cells[2].innerHTML;
	document.getElementById("gender") == selectedRow.cells[3].innerHTML;
	document.getElementById("check") == selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){
	selectedRow.cells[0].innerHTML = formData.firstName;
	selectedRow.cells[1].innerHTML = formData.lastName;
	selectedRow.cells[2].innerHTML = formData.email;
	selectedRow.cells[3].innerHTML = formData.gender;
	selectedRow.cells[4].innerHTML = formData.check;
} 
function onDelete(td){
	row = td.parentElement.parentElement;
	document.getElementById("head").deleteRow(row.rowIndex);
	resetForm();
}