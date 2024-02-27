import { Button } from "components/atoms/Button"
import { Input } from "components/atoms/Input"
import { useToDoDispatch } from "hooks/toDo"
import { useState } from "react"
import styled from "styled-components"

export const InputTodo = () => {
  const [toDo, setToDo] = useState('');
  const { onAdd } = useToDoDispatch();

  const onAddTodo = () => {
    if (toDo === '') return;
    onAdd(toDo);
    setToDo('');
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