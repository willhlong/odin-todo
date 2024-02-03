import addHeaderStuff from "./page-components/header";
import createTask from "./modules/task";
import './styles/mystyles.css';


addHeaderStuff();

const task1 = createTask('gym', 'go to the gym', 'tomorrow');
const task2 = createTask('school', 'go to school', 'now');
const task3 = createTask('sleep', 'go to bed', 'now');

const content = document.querySelector('.content');
content.appendChild(task1.el);
content.appendChild(task2.el);
content.appendChild(task3.el);