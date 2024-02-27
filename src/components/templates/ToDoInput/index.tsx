import { PageTitle } from "components/atoms/PageTitle"
import { InputTodo } from "components/organisms/InputToDo"
import { memo } from "react"

import styled from "styled-components"

// eslint-disable-next-line react/display-name
export const ToDoInput = memo(() => {
  return (
    <Contents>
      <PageTitle title="할 일 추가" />
      <InputTodo />
    </Contents>
      )
}, () => true);

// const Container = styled.div`
//   /* height: 100vh; */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: #eee;
// `

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  padding: 32px;
  border-radius: 8px;
`

// const ButtonContainer = styled.div`
//   position:absolute;
//   right: 40px;
//   bottom: 40px;
//   z-index: 1;
// `
