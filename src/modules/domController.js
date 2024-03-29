import editIcon from '../assets/information-circle-outline.svg';
import removeIcon from '../assets/trashcan-outline.svg';
import incompleteIcon from '../assets/circle-outline.svg';
import completeIcon from '../assets/check-circle-outline.svg';

export default function () {
    function showProject(project) {
        // Change project title element in dom to current project title
        const nameElement = document.querySelector('.current-project');
        nameElement.innerText = project.getName();

        let tasks = project.getTasks();
        const taskContainer = document.querySelector('.tasks-container');
        taskContainer.innerHTML =
            `<div class="task-elements-container first-row">
            <div class="completed hide"><img src="http://localhost:3000/circle-outline.svg"></div>
            <div class="title col-header">Task Title</div>
            <div class="due-date col-header">Due Date</div>
            <div class="edit hide"><img src="http://localhost:3000/pencil-outline.svg"></div>
            <div class="remove hide"><img src="http://localhost:3000/trashcan-outline.svg"></div>
            </div>`;
        let index = 0;
        tasks.forEach(task => {
            // Create svg icons to be added to dom  
            const myEditIcon = new Image();
            myEditIcon.src = editIcon;
            const myRemoveIcon = new Image();
            myRemoveIcon.src = removeIcon;
            const myIncompleteIcon = new Image();
            myIncompleteIcon.src = incompleteIcon;
            const myCompleteIcon = new Image();
            myCompleteIcon.src = completeIcon;

            //Create div element to wrap new task
            const el = document.createElement('div');
            el.classList.add('task-elements-container');
            el.id = index;
            index++;

            // Create element for checkbox indicating completion status
            const taskCompletedElement = document.createElement('div');
            // taskCompletedElement.appendChild(myIncompleteIcon);
            if (task.isCompleted()) {
                taskCompletedElement.appendChild(myCompleteIcon);
            }
            if (!task.isCompleted()) {
                taskCompletedElement.appendChild(myIncompleteIcon);
            }
            taskCompletedElement.classList.add('completed');

            // Create title element
            const taskTitleElement = document.createElement('div');
            taskTitleElement.innerText = task.getTitle();
            taskTitleElement.classList.add('title');
            if (task.isCompleted()) {
                taskTitleElement.classList.add('strikethrough');
            }
            if (!task.isCompleted()) {
                taskTitleElement.classList.remove('strikethrough');
            }

            // Create due date element
            const taskDueDateElement = document.createElement('div');
            taskDueDateElement.innerText = task.getDueDate();
            taskDueDateElement.classList.add('due-date');

            // Create element for edit icon
            const editLogoElement = document.createElement('div');
            editLogoElement.appendChild(myEditIcon);
            editLogoElement.classList.add('edit');

            // Create element for delete icon
            const deleteLogoElement = document.createElement('div');
            deleteLogoElement.appendChild(myRemoveIcon);
            deleteLogoElement.classList.add('remove');

            // Append all task elements to container
            el.appendChild(taskCompletedElement);
            el.appendChild(taskTitleElement);
            el.appendChild(taskDueDateElement);
            el.appendChild(editLogoElement);
            el.appendChild(deleteLogoElement);

            // Finally append newly created task to taskContainer
            taskContainer.appendChild(el);
        });
    }

    // function taskPrinter(task) {
    //     console.log('taskPrinter()');
    //     const el = document.createElement('div');
    //     el.classList.add('task-elements-container');

    //     // const taskCompletedElement = document.createElement('div');
    //     // taskCompletedElement.addEventListener('click', toggleCompletion);
    //     // taskCompletedElement.classList.add('completed');

    //     const taskDescriptionElement = document.createElement('div');
    //     taskDescriptionElement.innerText = task.getDescription();
    //     taskDescriptionElement.classList.add('description');

    //     const taskDueDateElement = document.createElement('div');
    //     taskDueDateElement.innerText = task.getDueDate();
    //     taskDueDateElement.classList.add('due-date');

    //     const editLogoElement = document.createElement('div');
    //     editLogoElement.appendChild(myEditIcon);
    //     editLogoElement.classList.add('edit');

    //     const deleteLogoElement = document.createElement('div');
    //     deleteLogoElement.appendChild(myRemoveIcon);
    //     deleteLogoElement.classList.add('remove');

    //     // el.appendChild(taskCompletedElement);
    //     el.appendChild(taskDescriptionElement);
    //     el.appendChild(taskDueDateElement);
    //     el.appendChild(editLogoElement);
    //     el.appendChild(deleteLogoElement);
    //     addTask(el);
    // }
    return { showProject }
}
