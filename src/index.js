import addHeaderStuff from "./page-components/header";
import createTask from "./modules/task";
import createProject from "./modules/project";
import './styles/mystyles.css';


addHeaderStuff();

const newTaskBtn = document.querySelector('.open-task-form-btn');
const submitTaskFormBtn = document.querySelector('.task-form-submit-btn');
const closeTaskFormBtn = document.querySelector('.task-form-close-btn');

const modal = document.querySelector('.modal');
newTaskBtn.addEventListener('click', () => {
    modal.showModal();
});
closeTaskFormBtn.addEventListener('click', () => {
    modal.close();
})
