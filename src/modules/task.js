export default function createTask(description, dueDate) {
    let completed = 'No';

    const el = document.createElement('div');
    el.classList.add('task-elements-container');

    const taskCompleted = document.createElement('div');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    taskCompleted.classList.add('completed');
    taskCompleted.appendChild(checkBox);
    const taskDescription = document.createElement('div');
    taskDescription.innerText = description;
    taskDescription.classList.add('description');
    const taskDueDate = document.createElement('div');
    taskDueDate.innerText = dueDate;
    taskDueDate.classList.add('due-date');
    const editLogo = document.createElement('div');
    editLogo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil-circle</title><path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M15.1,7.07C15.24,7.07 15.38,7.12 15.5,7.23L16.77,8.5C17,8.72 17,9.07 16.77,9.28L15.77,10.28L13.72,8.23L14.72,7.23C14.82,7.12 14.96,7.07 15.1,7.07M13.13,8.81L15.19,10.87L9.13,16.93H7.07V14.87L13.13,8.81Z" /></svg>';
    editLogo.classList.add('edit');
    const deleteLogo = document.createElement('div');
    deleteLogo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-circle</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" /></svg>';
    deleteLogo.classList.add('remove');
    el.appendChild(taskCompleted);
    el.appendChild(taskDescription);
    el.appendChild(taskDueDate);
    el.appendChild(editLogo);
    el.appendChild(deleteLogo);

    return {
        el
    }
}