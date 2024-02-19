import addHeaderStuff from "./page-components/header";
import projectManager from "./modules/projectManager";
import domController from "./modules/domController";
import formController from "./modules/formController";
import './styles/mystyles.css';

let myDomController = domController();
let myProjectManager = projectManager();
let myFormController = formController();

myProjectManager.addProject('all');
myProjectManager.setCurrentProject('all');
myProjectManager.displayProject();
myFormController.addListeners(myProjectManager.getCurrentProject());

myProjectManager.printCurrentProjectTasks(myDomController);

addHeaderStuff();


//fixme: figure out what is happening with printCurrentProjectTask
