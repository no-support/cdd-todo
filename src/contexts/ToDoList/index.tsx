import { createContext, useState } from "react";

const ToDoListContext = createContext<Context>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  toDoList: [],
  onAdd: (): void => { },
  onDelete: (): void => { },
})

interface Context {
  readonly toDoList: string[];
  readonly onAdd: (toDo: string) => void;
  readonly onDelete: (toDo: string) => void;
}

const ToDoListContextProvider = ({children} : Props) => {
  const [toDoList, setTodoList] = useState<string[]>([]);

  const onDelete = (toDo: string) => {
    setTodoList((prev) => prev.filter((item) => item !== toDo));
  }

  const onAdd = (toDo: string) => {
    setTodoList((prev) => [...prev, toDo]);
  }

  return (
    <ToDoListContext.Provider value={{ toDoList, onAdd, onDelete }}>
      {children}
    </ToDoListContext.Provider>
  )
}

interface Props {
  children: React.ReactNode;
}
export { ToDoListContext, ToDoListContextProvider };