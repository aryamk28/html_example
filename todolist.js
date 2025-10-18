const input = document.getElementById('inputBox');
const list = document.getElementById('todolist');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something..!");
    }
    const li = document.createElement('li');
    li.innerHTML = inputBox.value;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        list.removeChild(li);
    }
    li.appendChild(deleteBtn);
    list.appendChild(li);
    inputBox.value = "";
}















