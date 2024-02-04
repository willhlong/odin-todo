import addHeaderStuff from "./page-components/header";
import createTask from "./modules/task";
import './styles/mystyles.css';


addHeaderStuff();

const task1 = createTask('go to the gym', '02/05/2024');
const task2 = createTask('go to school', '03/09/2024');
const task3 = createTask('go to bed', '02/04/2024');

const content = document.querySelector('.tasks-container');
content.appendChild(task1.el);
content.appendChild(task2.el);
content.appendChild(task3.el);