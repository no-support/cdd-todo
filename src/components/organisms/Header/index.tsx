import { AppTitle } from "components/atoms/AppTitle"
import styled from "styled-components"

export const Header = () => {
  return <Container><AppTitle /></Container>
}

const Container = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  text-align:center;
  background-color: #304ffe;  
  padding: 8px 0;
  margin: 0;
`