import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 150px 0 150px;
`

const CompanyName = styled.h1`
  font-size: 60px;
  img {
    position: relative;
    top: -5px;
    vertical-align: middle;
    margin-right: 15px;
  }
  text-align: center;
`

const CompanyDescription = styled.p`
  font-size: 28px;
  text-align: center;
`

const Jumbotron = () => (
  <Container>
    <CompanyName>
      <img alt='BoostIO logo' src='/static/images/boostio-logo.svg' width='40' height='40' />BoostIO
    </CompanyName>
    <CompanyDescription>Tokyo based open source enthusiastic collective.</CompanyDescription>
  </Container>
)

export default Jumbotron
