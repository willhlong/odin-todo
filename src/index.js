import addHeaderStuff from "./page-components/header";
import domController from "./modules/domController";
import createProject from './modules/createProject';
import createTask from "./modules/createTask";
import './styles/mystyles.css';

// Init projects array and starting project objects for first page load
let projects = [];
let defaultProject = createProject('All Tasks');
let currentProject = defaultProject;
projects.push(currentProject);

let task1 = createTask('false', 'task1', 'desc', 'now');
let task2 = createTask('false', 'task2', 'desc', 'now');
let task3 = createTask('false', 'task3', 'desc', 'now');
currentProject.addTask(task1);
currentProject.addTask(task2);
currentProject.addTask(task3);
// Add project tasks to DOM with domController object
let myDomController = domController();
myDomController.showProject(currentProject);

// Handle data capture when new task is created
const newTaskBtn = document.querySelector('.open-task-form-btn');
const closeTaskFormBtn = document.querySelector('.task-form-close-btn');
const modal = document.querySelector('.modal');
const form = document.getElementById('task-form');
form.addEventListener('submit', (e) => {

    const formData = new FormData(form);
});
form.addEventListener('formdata', (e) => {
    let formData = e.formData;
    let task = createTask('false', formData.get('title'), formData.get('description'), formData.get('duedate'));
    currentProject.addTask(task);
    myDomController.showProject(currentProject);
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

addHeaderStuff();

// TODO: refactor form and data capture for creating tasks