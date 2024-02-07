import styled from "styled-components";

export const Label = ({label}:Props) => {
  return <Container>{label}</Container>
}

interface Props {
  readonly label: string;
}

const Container = styled.div`
flex:1;
font-size: 1.2rem;
margin-right:16px;
`;