export default function createTask(title, description, dueDate) {
    const el = document.createElement('div');
    const taskTitle = document.createElement('p');
    taskTitle.innerText = title;
    const taskDescription = document.createElement('p');
    taskDescription.innerText = description;
    const taskDueDate = document.createElement('p');
    taskDueDate.innerText = dueDate;

    el.appendChild(taskTitle);
    el.appendChild(taskDescription);
    el.appendChild(taskDueDate);

    return {
        el
    }
}