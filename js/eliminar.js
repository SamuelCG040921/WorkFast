function deleteTask(button) {
    var tarea = button.closest(".tarea");
    tarea.remove();
}

function allowDrop(event) {
    event.preventDefault();
}
