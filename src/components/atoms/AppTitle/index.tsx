import { Link } from "react-router-dom"

import styled from "styled-components"

export const AppTitle = () => {
  return <Container to="/">할일목록앱</Container>
}

const Container = styled(Link)`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`