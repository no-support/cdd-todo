import { Button } from "components/atoms/Button"
import { Input } from "components/atoms/Input"
import { ToDoListContext } from "contexts/ToDoList"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export const InputTodo = () => {
  const [toDo, setToDo] = useState('');
  const { onAdd } = useContext(ToDoListContext);
  const navigate = useNavigate();

  const onAddTodo = () => {
    if (toDo === '') return;

    onAdd(toDo);
    setToDo('');
    navigate('/');
  }

  return <Container>
    <Input value={toDo} onChange={setToDo} />
    <Button label="추가" color="#304FFE" onClick={onAddTodo} />
  </Container>
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`