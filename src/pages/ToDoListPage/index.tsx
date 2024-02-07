import { ToDoList } from "components/templates/ToDoList";
import { ToDoListContext } from "contexts/ToDoList";
import { useContext } from "react";

export const ToDoListPage = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);
  
  return <ToDoList toDoList={toDoList} onDelete={onDelete} />
}
