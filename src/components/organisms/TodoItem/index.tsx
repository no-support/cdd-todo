import { Label } from "components/atoms/Label"
import { Button } from "components/atoms/Button"
import styled from "styled-components"

export const TodoItem = ({ label, onDelete}: Props) => {
  return <Container>
    <Label label={label} />
    <Button label="삭제" onClick={onDelete}/>
  </Container>
}

interface Props {
  label: string
  onDelete?: () => void
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`
