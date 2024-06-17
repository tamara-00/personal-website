function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const task = taskInput.value.trim();

    if (task !== "") {
        const listItem = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(taskText);
        listItem.appendChild(removeButton);

        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}
