import React from 'react'
import Section from './Section'
import styled from 'styled-components'

const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  max-width: 700px;
  margin: 0 auto;
  @media(max-width: 480px) {
    flex-direction: column;
  }
  li {
    margin: 0 15px;
    width: 50%;
    text-align: center;
    transition: transform ease-in-out 200ms;
    @media(max-width: 540px) {
      width: 100%;
      margin: 0;
    }
  }
  li a {
    color: inherit;
    text-decoration: none;
  }
  li h3 {
    font-size: 32px;
    margin: 10px auto 0;
  }
  li p {
    line-height: 1.6;
  }
  li a.url {
    color: #1864ab;
  }
  li:hover {
    transform: translateY(-2px);
  }
  li:hover a.url {
    color: #1c7ed6;
    text-decoration: underline;
  }
`

const ProjectListSection = () => (
  <Section title='Projects'>
    <ProjectList>
      <li>
        <a target='_blank' href='https://boostnote.io'>
          <img
            width='100'
            height='100'
            src='/static/images/boostnote-logo.png' />
          <h3>Boostnote</h3>
          <p>Note-taking app<br /> for developers</p>
          <p><a className='url'>boostnote.io</a></p>
        </a>
      </li>
      <li>
        <a target='_blank' href='https://boostlog.io'>
          <img
            width='100'
            height='100'
            src='/static/images/boostio-logo.svg' />
          <h3>Boostlog</h3>
          <p>Publication platform<br />  with Markdown</p>
          <p><a className='url'>boostlog.io</a></p>
        </a>
      </li>
    </ProjectList>
  </Section>
)

export default ProjectListSection
