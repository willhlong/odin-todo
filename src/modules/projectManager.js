import createProject from "./project";
import domController from "./domController";

export default function() {
    let currentProject;
    let projects = [];

    function addProject(name) {
        let project = createProject(name);
        projects.push(project);
    }

    function displayProject() {
        const el = document.querySelector('.current-project');
        el.innerText = currentProject.getName();
    }

    function printCurrentProjectTasks(domController) {
        console.log(currentProject.getName());
        currentProject.printTaskList(domController);
    }

    function setCurrentProject(name) {
        projects.forEach((project) => {
            if (project.getName() == name) {
                currentProject = project;
            }
        })
    }

    function getCurrentProject() {
        return currentProject;
    }

    return { addProject, displayProject, printCurrentProjectTasks, setCurrentProject, getCurrentProject }
}