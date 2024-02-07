import { Button } from "components/atoms/Button"
import { PageTitle } from "components/atoms/PageTitle"
import { InputTodo } from "components/organisms/InputToDo"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export const ToDoInput = () => {
  const navigate = useNavigate();
  return <Container>
    <Contents>
      <PageTitle title="할 일 추가" />
      <InputTodo />
    </Contents>
    <ButtonContainer>
      <Button label="닫기" onClick={()=> navigate('/')} />
    </ButtonContainer>
  </Container>
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`

const ButtonContainer = styled.div`
  position:absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`
