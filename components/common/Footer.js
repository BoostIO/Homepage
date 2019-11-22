import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  height: 56px;
  font-size: 14px;
  line-height: 4;
  color: #f2f2f2;
  background-color: #212121;
  letter-spacing: -0.02em;
  position: absolute;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`
export default () => <Footer centered>©2019 BoostIO</Footer>
