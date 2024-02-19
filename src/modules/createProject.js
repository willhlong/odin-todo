export default function createProject(name) {
    let tasks = [];

    function addTask(task) {
        tasks.push(task);
    }

    function getTasks() { return tasks; }

    // function deleteTask(task) {
    //     let index = tasks.indexOf(task);
    //     tasks.splice(index, 1);
    // }

    function getName() { return name; }

    return { addTask, getTasks, getName }
}