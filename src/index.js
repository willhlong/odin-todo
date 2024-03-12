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

// Add project tasks to DOM with domController object
let myDomController = domController();
myDomController.showProject(currentProject);

// Handle data capture when new task is created
const newTaskBtn = document.querySelector('.open-task-form-btn');
const submitTaskFormBtn = document.querySelector('.task-form-submit-btn');
const closeTaskFormBtn = document.querySelector('.task-form-close-btn');
const modal = document.querySelector('.modal');
const form = document.getElementById('task-form');
submitTaskFormBtn.addEventListener('click', () => {
    const formData = new FormData(form);
    document.getElementById('form-title').value = '';
    document.getElementById('form-description').value = '';
    document.getElementById('form-due-date').value = '';
    modal.close();
});
form.addEventListener('formdata', (e) => {
    let formData = e.formData;
    let task = createTask(false, formData.get('title'), formData.get('description'), formData.get('duedate'));
    currentProject.addTask(task);
    myDomController.showProject(currentProject);
    // const checkboxes = document.querySelectorAll('.completed');
    // checkboxes.forEach(checkbox => {
    //     checkbox.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         let taskIndex = e.currentTarget.parentElement.id;
    //         let tasks = currentProject.getTasks();
    //         console.log(tasks[taskIndex].isCompleted());
    //         if (tasks[taskIndex].isCompleted()) {
    //             tasks[taskIndex].setCompleted(false);
    //         }
    //         if (!tasks[taskIndex].isCompleted()) {
    //             tasks[taskIndex].setCompleted(true);
    //         }
    //         console.log(tasks[taskIndex].isCompleted());
    //         myDomController.showProject(currentProject);
    //     });
    // });
})
newTaskBtn.addEventListener('click', () => {
    modal.showModal();
});
closeTaskFormBtn.addEventListener('click', () => {
    modal.close();
});

addHeaderStuff();

// TODO: solve toggling task completion