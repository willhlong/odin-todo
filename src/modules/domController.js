export default function addTask(task) { 
    const el = document.querySelector('.tasks-container');
    el.appendChild(task);
}