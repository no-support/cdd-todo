// import { Button } from "components/atoms/Button"

import { ToDoItem } from "components/organisms/TodoItem";
import { ToDo } from "contexts/ToDoList"
import styled from "styled-components"

export const ToDoList = ({ toDoList, onDelete }: Props) => {
 
  return <>
    <Contents>
      <ToDoListContainer>
        {toDoList.map((toDo) => <ToDoItem key={toDo.id} label={toDo.text} onDelete={() => {
          if (typeof onDelete === 'function') onDelete(toDo.id);
        }}
        />)
        }
      </ToDoListContainer>
    </Contents>
  </>
}

interface Props {
  toDoList: ReadonlyArray<ToDo>;
  onDelete?: (toDo: number) => void;
}

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
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

// const ButtonContainer = styled.div`
//   /* position:absolute; */
//   /* right:40px; */
//   /* bottom:40px; */
//   z-index: 1;
// `