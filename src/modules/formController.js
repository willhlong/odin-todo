import createTask from "./createTask";

export default function () {
    const newTaskBtn = document.querySelector('.open-task-form-btn');
    const submitTaskFormBtn = document.querySelector('.task-form-submit-btn');
    const closeTaskFormBtn = document.querySelector('.task-form-close-btn');
    const modal = document.querySelector('.modal');
    const title = document.getElementById('form-title');
    const description = document.getElementById('form-description');
    const dueDate = document.getElementById('form-due-date');


    function addListeners(currentProject) {
        submitTaskFormBtn.addEventListener('click', () => {
            let task = createTask(false, title.value, description.value, dueDate.value);
            currentProject.addTask(task);
        })

        newTaskBtn.addEventListener('click', () => {
            // clear form fields
            // title.value = "";
            // description.value = "";
            // dueDate.value = "";
            modal.showModal();
        });

        closeTaskFormBtn.addEventListener('click', () => {
            modal.close();
        });
    }

    return { addListeners }
}
