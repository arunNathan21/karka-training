var taskInput=document.getElementById("new-task");
var addButton=document.getElementsByTagName("button")[0];
var incompleteTaskHolder=document.getElementById("incomplete-tasks");
// var completedTasksHolder=document.getElementById("completed-tasks");



var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");
	var label=document.createElement("label");
	var editInput=document.createElement("input");
	var editButton=document.createElement("button");
	var deleteButton=document.createElement("button");

	editInput.type="text";
	editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
	// deleteButton.className="deletes";

    label.innerText=taskString;

	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



var addTask=function(){
	var listItem=createNewTaskElement(taskInput.value);
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";

}


var editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");


var listItem=this.parentNode;

var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");
		if(containsClass){

			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		listItem.classList.toggle("editMode");
}



var deleteTask=function(){
		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		ul.removeChild(listItem);

}

var taskCompleted=function(){
	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem);

}




var ajaxRequest=function(){
	console.log("AJAX Request");
}

addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem){
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");

			editButton.onclick=editTask;
			deleteButton.onclick=deleteTask;
}




