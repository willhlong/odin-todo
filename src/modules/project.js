import projectManager from "./projectManager.js";
import taskPrinter from "./domController.js"


export default function createProject(name) {
    let tasks = [];

    function addTask(task) {
        tasks.push(task);
    }

    function deleteTask(task) {
        let index = tasks.indexOf(task);
        tasks.splice(index, 1);
    }

    function printTaskList(domController) {
        tasks.forEach((task) => {
            domController.taskPrinter(task);
        })
    }

    function getName() { return name; }

    return { addTask, printTaskList, getName }
}