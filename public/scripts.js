document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Function to render a task to the DOM
    function addTaskToDOM(task) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task));
        taskList.appendChild(li);
    }

    // Function to load initial tasks from the server
    function loadTasks() {
        fetch('/')
            .then(response => response.json())
            .then(data => {
                data.tasks.forEach(task => addTaskToDOM(task));
            })
            .catch(error => console.error('Error loading tasks:', error));
    }

    // Handle new task form submission
    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const newTask = taskInput.value.trim();
        if (newTask) {
            fetch('/add-task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task: newTask }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message === 'Task added successfully') {
                        addTaskToDOM(newTask);
                        taskInput.value = '';
                    }
                })
                .catch(error => console.error('Error adding task:', error));
        }
    });

    // Load initial tasks
    loadTasks();
});
