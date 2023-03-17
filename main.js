var tasks = [];

function addTask() {
    var taskTitle = document.getElementById('title').value;
    var taskPriority = document.getElementById('priority').value;
    var taskStatus = 'pending';

    const task = { title: taskTitle, priority: taskPriority, status: taskStatus };
    tasks.push(task);
}

function displayTasks() {
    var list = document.getElementById('tasks-list');
    list.innerHTML = ''; // Reset the list content whenever we display the tasks, so we don't end up with duplicate tasks

    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement('li');
        var listItem = li.appendChild(document.createTextNode(tasks[i].title + ' ' + tasks[i].priority + ' ' + tasks[i].status));
        list.appendChild(listItem);
    }
}

document.getElementById('addTaskBtn').addEventListener('click', function() {
    addTask();
    displayTasks();
});