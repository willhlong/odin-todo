export default function createTask(completed, title, description, dueDate) {

    /* Load completed status and update checkmark icon in DOM */
    // if (completed) {
    //     taskCompletedElement.appendChild(myCompleteIcon);
    //     taskDescriptionElement.classList.add('strikethrough');
    // }
    // else {
    //     taskCompletedElement.appendChild(myIncompleteIcon);
    // }

    // /* Toggle whether a task has been completed and update checkbox accordingly */
    // function toggleCompletion() {
    //     if (completed) {
    //         taskCompletedElement.removeChild(taskCompletedElement.firstChild);
    //         taskCompletedElement.appendChild(myIncompleteIcon);
    //         completed = false;
    //         taskDescriptionElement.classList.remove('strikethrough');
    //     }
    //     else {
    //         taskCompletedElement.removeChild(taskCompletedElement.firstChild);
    //         taskCompletedElement.appendChild(myCompleteIcon);
    //         completed = true;
    //         taskDescriptionElement.classList.add('strikethrough');
    //     }
    // }

    function isCompleted() { return completed; }
    function setCompleted(completedStatus) {completed = completedStatus ;}
    function getTitle() { return title; }
    function getDescription() { return description ;}
    function getDueDate() { return dueDate; }

    return {
        isCompleted, setCompleted, getTitle, getDescription, getDueDate
    };
}