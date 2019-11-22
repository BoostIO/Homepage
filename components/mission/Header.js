import React from 'react'
import styled from 'styled-components'

const Header = styled.footer`
  text-align: left;
  img {
    width: 30px;
    height: 30px;
    margin: 7px;
  }
  img:hover {
    transform: scale(1.2);
    transition: 0.4s;
  }
`
export default () => (
  <Header>
    <a href="https://boostio.co">
      <img src="/static/images/boostio-logo.svg" />
    </a>
  </Header>
)
