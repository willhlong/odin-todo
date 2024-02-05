import editIcon from '../assets/pencil.svg';
import removeIcon from '../assets/trashcan.svg';
import incompleteIcon from '../assets/empty-circle.svg';
import completeIcon from '../assets/check-circle.svg';

export default function createTask(completed, description, dueDate) {

    const el = document.createElement('div');
    el.classList.add('task-elements-container');

    const myEditIcon = new Image();
    myEditIcon.src = editIcon;

    const myRemoveIcon = new Image();
    myRemoveIcon.src = removeIcon;

    const myIncompleteIcon = new Image();
    myIncompleteIcon.src = incompleteIcon;

    const myCompleteIcon = new Image();
    myCompleteIcon.src = completeIcon;

    const taskCompletedElement = document.createElement('div');
    taskCompletedElement.addEventListener('click', toggleCompletion);
    taskCompletedElement.classList.add('completed');

    const taskDescriptionElement = document.createElement('div');
    taskDescriptionElement.innerText = description;
    taskDescriptionElement.classList.add('description');

    const taskDueDateElement = document.createElement('div');
    taskDueDateElement.innerText = dueDate;
    taskDueDateElement.classList.add('due-date');

    const editLogoElement = document.createElement('div');
    editLogoElement.appendChild(myEditIcon);
    editLogoElement.classList.add('edit');

    const deleteLogoElement = document.createElement('div');
    deleteLogoElement.appendChild(myRemoveIcon);
    deleteLogoElement.classList.add('remove');

    if (completed) {
        taskCompletedElement.appendChild(myCompleteIcon);
        taskDescriptionElement.classList.add('strikethrough');
    }
    else {
        taskCompletedElement.appendChild(myIncompleteIcon);
    }

    el.appendChild(taskCompletedElement);
    el.appendChild(taskDescriptionElement);
    el.appendChild(taskDueDateElement);
    el.appendChild(editLogoElement);
    el.appendChild(deleteLogoElement);

    
    function toggleCompletion() {
        if (completed) {
            taskCompletedElement.removeChild(taskCompletedElement.firstChild);
            taskCompletedElement.appendChild(myIncompleteIcon);
            completed = false;
            taskDescriptionElement.classList.remove('strikethrough');
        }
        else {
            taskCompletedElement.removeChild(taskCompletedElement.firstChild);
            taskCompletedElement.appendChild(myCompleteIcon);
            completed = true;
            taskDescriptionElement.classList.add('strikethrough');
        }
    }

    return {
        el
    }
}