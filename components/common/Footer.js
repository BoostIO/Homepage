import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  height: 56px;
  text-align: center;
  font-size: 14px;
  line-height: 4;
  color: #a1a7b3;
  background-color: #fff;
  box-shadow: 0 -1px 0 0 #ebedf2;
  letter-spacing: -.02em;
`

const currentYear = new Date().getFullYear();

export default () => (
  <Footer>
    © {currentYear} BoostIO
  </Footer>
)
