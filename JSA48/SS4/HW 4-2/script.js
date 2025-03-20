document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const input = document.querySelector('input[type="text"]');
    const taskList = document.querySelector('ul');
    let editTaskId = null;

    loadTasks();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
            const taskId = editTaskId ? editTaskId : Date.now() % 86400000; // Use existing ID if editing, mod 86400000
            const taskStatus = 'Pending'; // Default status
            const taskDate = new Date().toLocaleDateString(); // Current date
            addTask(taskId, taskText, taskStatus, taskDate);
            saveTask(taskId, taskText, taskStatus, taskDate);
            input.value = '';
            editTaskId = null; // Reset editTaskId after adding/updating task
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const li = e.target.closest('li'); // Ensure the correct parent element is targeted
            const taskId = li.querySelector('.task-id').textContent.slice(1); // Extract ID without '#'
            if (e.target.classList.contains('delete')) {
                li.remove();
                deleteTask(taskId);
            } else if (e.target.classList.contains('edit')) {
                const taskText = li.querySelector('.task-text').textContent.trim();
                input.value = taskText;
                editTaskId = taskId;
                li.remove();
                deleteTask(taskId);
            }
        } else if (e.target.classList.contains('task-status')) {
            const li = e.target.closest('li'); // Ensure the correct parent element is targeted
            const taskId = li.querySelector('.task-id').textContent.slice(1); // Extract ID without '#'
            if (e.target.textContent === '(Pending)') {
                e.target.textContent = '(Done)';
                e.target.classList.add('done');
                updateTaskStatus(taskId, 'Done');
            } else {
                e.target.textContent = '(Pending)';
                e.target.classList.remove('done');
                updateTaskStatus(taskId, 'Pending');
            }
        }
    });

    function addTask(taskId, taskText, taskStatus, taskDate) {
        const li = document.createElement('li');

        const metaDiv = document.createElement('div');
        metaDiv.className = 'task-meta';
        const idSpan = document.createElement('span');
        idSpan.className = 'task-id';
        idSpan.textContent = `#${taskId}`;
        metaDiv.appendChild(idSpan);
        const dateSpan = document.createElement('span');
        dateSpan.className = 'task-date';
        dateSpan.textContent = `(${taskDate})`;
        metaDiv.appendChild(dateSpan);
        const statusSpan = document.createElement('span');
        statusSpan.className = 'task-status';
        statusSpan.textContent = `(${taskStatus})`;
        if (taskStatus === 'Done') {
            statusSpan.classList.add('done');
        }
        metaDiv.appendChild(statusSpan);
        li.appendChild(metaDiv);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'task-content';
        const textDiv = document.createElement('div');
        textDiv.className = 'task-text';
        textDiv.textContent = taskText;
        contentDiv.appendChild(textDiv);
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'task-buttons';
        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
        buttonDiv.appendChild(editButton);
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        buttonDiv.appendChild(deleteButton);
        contentDiv.appendChild(buttonDiv);
        li.appendChild(contentDiv);

        taskList.appendChild(li);
    }

    function saveTask(taskId, taskText, taskStatus, taskDate) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ id: taskId, text: taskText, status: taskStatus, date: taskDate });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function deleteTask(taskId) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.id != taskId);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function updateTaskStatus(taskId, taskStatus) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const task = tasks.find(task => task.id == taskId);
        if (task) {
            task.status = taskStatus;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task.id, task.text, task.status, task.date));
    }
});
