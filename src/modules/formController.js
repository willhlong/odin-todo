import createTask from "./task";
import addTask from "./domController";

export default function addFormListeners() {
    const newTaskBtn = document.querySelector('.open-task-form-btn');
    const submitTaskFormBtn = document.querySelector('.task-form-submit-btn');
    const closeTaskFormBtn = document.querySelector('.task-form-close-btn');
    const modal = document.querySelector('.modal');
    const title = document.getElementById('form-title');
    const description = document.getElementById('form-description');
    const dueDate = document.getElementById('form-due-date');

    submitTaskFormBtn.addEventListener('click', () => {
        let task = createTask(false, description.value, dueDate.value);
        addTask(task.el);
    });

    newTaskBtn.addEventListener('click', () => {
        // clear form fields
        title.value = "";
        description.value = "";
        dueDate.value = "";
        modal.showModal();
    });

    closeTaskFormBtn.addEventListener('click', () => {
        modal.close();
    });

}
