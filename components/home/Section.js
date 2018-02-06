import React from 'react'
import styled from 'styled-components'

const SectionContainer = styled.section`
  padding-bottom: 100px;
  &:last-of-type {
    padding-bottom: 50px;
  }
`

const SectionHeader = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 60px;
`

const Section = ({title, children}) => (
  <SectionContainer>
    <SectionHeader>{title}</SectionHeader>
    {children}
  </SectionContainer>
)

export default Section
