import createTask from './task.js';
console.log("Hello, World!");

const myTask = createTask('Complete TOP Project', 'Work on project from The Odin Project', 'none');
console.log(myTask.printTitle());
console.log(myTask.printDescription());
console.log(myTask);