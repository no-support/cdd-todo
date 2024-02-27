import { ToDoInput } from "components/templates/ToDoInput"
import { ToDoList } from "components/templates/ToDoList"
import { useToDoDispatch, useToDoState } from "hooks/toDo";
import styled from "styled-components";

export const ToDo = () => {
  const toDoList = useToDoState();
  const { onDelete } = useToDoDispatch();
  
  return (<Container>
    <ToDoInput />
    <ToDoList toDoList={toDoList} onDelete={onDelete} />
  </Container>)
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`