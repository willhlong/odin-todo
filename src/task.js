function createTask(title, description, dueDate) {
   const printTitle = () => title;
   const printDescription = () => description;
   return { printTitle, printDescription };
}

export default createTask;