/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useCallback, useMemo, useReducer, useRef } from "react";

const initialState: ToDo[] = [{
  id: 0,
  text: '할 일 1'
}];

export type ToDo = {
  id: number;
  text: string;
}

const toDoReducer = (state: ToDo[], action: Action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat(action.toDo);
    case 'DELETE':
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
}

type Action = { type: 'ADD', toDo: ToDo } | { type: 'DELETE', id: number }

export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const nextId = useRef(1);
  
  // useReducer를 사용할 때, dispatch 함수를 통해 항상 최신의 상태를 사용하기 때문에 dependencies에 dispatch를 넣지 않아도 된다.
  const onAdd = useCallback((text: string) => {
    dispatch({ type: 'ADD', toDo: { id: ++nextId.current, text } });
  }, [])

  const onDelete = useCallback((index: number) => {
    dispatch({ type: 'DELETE', id: index });
  }, [])

  // useMemo까지 사용해야 TodoProvider 컴포넌트 자체가 리렌더링 될 때마다 새로운 객체가 생성되지 않는다.
  const memoizedDispatches = useMemo(() => ({onAdd, onDelete}), []);

  return (
    <ToDoStateContext.Provider value={state}>
      <ToDoDispatchContext.Provider value={memoizedDispatches}>
          {children}
      </ToDoDispatchContext.Provider>
    </ToDoStateContext.Provider>
  )
}

interface Props {
  children: React.ReactNode;
}

export const ToDoStateContext = createContext<ReadonlyArray<ToDo>>([]);

export const ToDoDispatchContext = createContext<Dispatch>({
  onAdd: (): void => { },
  onDelete: (): void => { },
})

interface Dispatch {
  readonly onAdd: (toDo: string) => void;
  readonly onDelete: (index: number) => void;
}

export const ToDoNextIdContext = createContext<number>(0);