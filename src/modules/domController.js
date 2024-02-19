import editIcon from '../assets/pencil-outline.svg';
import removeIcon from '../assets/trashcan-outline.svg';
import incompleteIcon from '../assets/circle-outline.svg';
import completeIcon from '../assets/check-circle-outline.svg';

export default function () {
    // Create svg icons to be added to dom
    const myEditIcon = new Image();
    myEditIcon.src = editIcon;
    const myRemoveIcon = new Image();
    myRemoveIcon.src = removeIcon;
    const myIncompleteIcon = new Image();
    myIncompleteIcon.src = incompleteIcon;
    const myCompleteIcon = new Image();
    myCompleteIcon.src = completeIcon;

    function addTask(task) {
        const el = document.querySelector('.tasks-container');
        el.appendChild(task);
    }

    function taskPrinter(task) {
        console.log('taskPrinter()');
        const el = document.createElement('div');
        el.classList.add('task-elements-container');

        // const taskCompletedElement = document.createElement('div');
        // taskCompletedElement.addEventListener('click', toggleCompletion);
        // taskCompletedElement.classList.add('completed');

        const taskDescriptionElement = document.createElement('div');
        taskDescriptionElement.innerText = task.getDescription();
        taskDescriptionElement.classList.add('description');

        const taskDueDateElement = document.createElement('div');
        taskDueDateElement.innerText = task.getDueDate();
        taskDueDateElement.classList.add('due-date');

        const editLogoElement = document.createElement('div');
        editLogoElement.appendChild(myEditIcon);
        editLogoElement.classList.add('edit');

        const deleteLogoElement = document.createElement('div');
        deleteLogoElement.appendChild(myRemoveIcon);
        deleteLogoElement.classList.add('remove');

        // el.appendChild(taskCompletedElement);
        el.appendChild(taskDescriptionElement);
        el.appendChild(taskDueDateElement);
        el.appendChild(editLogoElement);
        el.appendChild(deleteLogoElement);
        addTask(el);
    }
    return { taskPrinter }
}
