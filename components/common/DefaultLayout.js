import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
`

export default ({children}) => (
  <Container>
    {children}
    <Footer />
  </Container>
)
