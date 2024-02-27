import { ToDoStateContext, ToDoDispatchContext } from "contexts/ToDoList";
import { useContext } from "react";

export function useToDoState() {

  const context = useContext(ToDoStateContext);
  if (!context) {
    throw new Error('Cannot find ToDoProvider');
  }
  return context;
}

export function useToDoDispatch() {
  const context = useContext(ToDoDispatchContext);
  if (!context) {
    throw new Error('Cannot find ToDoProvider');
  }
  return context;
}