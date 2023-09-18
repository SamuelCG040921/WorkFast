function addTask() {
    var taskText = document.getElementById("taskInput").value;
    var newTask = createTaskElement(taskText);
    document.querySelector(".tareas-container").appendChild(newTask);
    document.getElementById("taskInput").value = "";
}