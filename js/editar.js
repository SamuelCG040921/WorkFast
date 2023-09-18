let editingTask = null;
function editTask(button) {
    editingTask = button.closest(".tarea");
    var descripcion = editingTask.querySelector(".descripcion");
    var editButton = editingTask.querySelector(".puntos");

    if (editButton.textContent === "Editar") {
        descripcion.contentEditable = true;
        descripcion.focus();
        editButton.textContent = "Guardar";
    } else {
        descripcion.contentEditable = false;
        editButton.textContent = "Editar";

        // Actualiza la tarea editada y el texto original
        var editedText = descripcion.textContent;
        editingTask.dataset.originalText = editedText;
    }
}
