
export default function task() {
   let title;
   let description;
   let dueDate;
   let completed;
   
   const printTitle = () => title;
   let setTitle = (newTitle) => { title = newTitle; }
   const printDescription = () => description;
   let setDescription = (newDescription) => { description = newDescription; }
   const printdueDate = () => dueDate;
   let setDueDate = (newDueDate) => { dueDate = newDueDate; }
   const getCompleted = () => completed;

   return { 
      printTitle, 
      setTitle,
      printDescription, 
      setDescription,
      printdueDate, 
      setDueDate,
      getCompleted 
   };
}
