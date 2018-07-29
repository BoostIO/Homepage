import React from 'react'
import Footer from './Footer'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 0;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  }

  html {
    font-size: 16px;
    color: #ß3d434d;
  }

  body {
    margin: 0;
  }
  ::-webkit-scrollbar {
    width: 1px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    width: 1px;
    background-color: transparent;
    visibility: hidden;
  }
  *::selection {
    color: #fff;
    background-color: #212529;
  }
`

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
`

const Main = styled.main`
  width: 100%;
  max-width: 810px;
  margin: 0 auto;
`

export default ({children}) => (
  <Container>
    <Main>
      {children}
    </Main>
    <Footer />
  </Container>
)
