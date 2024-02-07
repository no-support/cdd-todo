import styled from "styled-components"


export const Input = ({ value, onChange }: Props) => {
  return (
    <TextInput value={value} onChange={(event)=> onChange(event.target.value)} />
  )
}

interface Props {
  readonly value: string;
  readonly onChange: (text: string) => void;
}

const TextInput = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`