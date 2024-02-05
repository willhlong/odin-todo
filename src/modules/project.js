import createTask from "./task";

export default function createProject(name) {
    let tasks = [];

    function addTask(task) {
        tasks.push(task);
    }

    return { addTask }
}