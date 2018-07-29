import React from 'react'
import styled from 'styled-components'

const SectionContainer = styled.section`
  padding: 0 10px;
  padding-bottom: 160px;
`

const SectionHeader = styled.header`
  margin-bottom: 72px;
  h1 {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.333333333;
    font-weight: 700;
    letter-spacing: -.02em;
    text-align: center;
  }
`

const Section = ({title, children}) => (
  <SectionContainer>
    <SectionHeader>
      <h1>{title}</h1>
    </SectionHeader>
    {children}
  </SectionContainer>
)

export default Section
