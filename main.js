let getTask = document.getElementById("get-task");
let add = document.getElementById("add");
let tasks = document.getElementById("tasks");

add.onclick = function addTask() {
  if (getTask.value != "") {
    let div = document.createElement("div");
    tasks.appendChild(div);
    let input = document.createElement("input");
    input.value = getTask.value;
    input.readOnly = true;
    div.appendChild(input);
    let edit = document.createElement("input");
    edit.type = "button";
    edit.value = "Edit";
    edit.className = "edit";
    div.appendChild(edit);
    let del = document.createElement("input");
    del.type = "button";
    del.value = "Delete";
    del.className = "delete";
    div.appendChild(del);
    getTask.value = "";
  }
};
addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    e.target.parentElement.remove();
  }
});
addEventListener("click", function (e) {
  if (e.target.className == "edit") {
    e.target.previousSibling.readOnly = false;
    e.target.previousSibling.focus();
    e.target.value = "Save";
    e.target.className = "save";
  } else if (e.target.className == "save") {
    e.target.previousSibling.readOnly = true;
    e.target.value = "Edit";
    e.target.className = "edit";
  }
});
