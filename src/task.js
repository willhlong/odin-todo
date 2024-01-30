function createTask(title, description) {
   const printTitle = () => title;
   const printDescription = () => description;
   return { printTitle, printDescription };
}

export default createTask;