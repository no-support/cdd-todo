import styled from "styled-components";

export const PageTitle = ({title}:Props) => {
  return <Conatainer>{title}</Conatainer>;
}

interface Props {
  readonly title: string;
}

const Conatainer = styled.h1`
  margin-top: 0;
`;