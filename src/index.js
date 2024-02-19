import addHeaderStuff from "./page-components/header";
import domController from "./modules/domController";
import createProject from './modules/createProject';
import createTask from './modules/createTask';
import './styles/mystyles.css';

// Init projects array and starting project objects for first page load
let projects = [];
let defaultProject = createProject('All Tasks');
let currentProject = defaultProject;
projects.push(currentProject);


// *** FOR TESTING. REMOVE LATER ***
let task1 = createTask(false, 'Gym', 'go to the gym and get swol', '12/24/24');
currentProject.addTask(task1)
// Add project tasks to DOM
let myDomController = domController();

myDomController.showProject(currentProject);

addHeaderStuff();
