import { Label } from "components/atoms/Label"
import { Button } from "components/atoms/Button"
import styled from "styled-components"
import { memo } from "react"

// eslint-disable-next-line react/display-name
export const ToDoItem = memo(({ label, onDelete }: Props) => {

  return <Container>
    <Label label={label} />
    <Button label="삭제" onClick={onDelete} />
  </Container>
}, () => true);

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