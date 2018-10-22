import React from 'react'
import Section from './Section'
import styled from 'styled-components'

const ProjectList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  margin: 0 -10px;
  @media (min-width: 540px) {
    display: flex;
    justify-content: center;
    align-content: flex-start;
  }
`

const ProjectListItem = styled.li`
  width: 100%;
  padding: 0 10px;
  text-align: center;
  transition: transform 400ms;
  :not(:first-child) {
    margin-top: 48px;
  }
  h1 {
    margin-top: 0;
    margin-bottom: 4px;
    font-family: inherit;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.333333333;
    letter-spacing: -.01em;
    color: #212529;
  }
  a {
    text-decoration: none;
    color: #a1a7b3;
    transition: color 300ms;
    font-size: 14px;
    font-style: italic;
    letter-spacing: -.01em;
  }
  a:hover {
    text-decoration: none;
    color: #3d434d;
  }
  p {
    margin-top: 24px;
    font-size: 16px;
    line-height: 1.5;
    color: #3d434d;
  }
  :hover {
    text-decoration: none;
    transform: translateY(-4px);
    img {
      transform: scale(1.05);
    }
  }

  @media screen and (min-width: 768px) {
    width: 40%;
    :not(:first-child) {
      margin-top: 0;
    }
  }
`

const ProjectLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  img {
    transition: transform 300ms;
  }
`

const ProjectListSection = () => (
  <Section title='Projects'>
    <ProjectList>
      <ProjectListItem>
        <ProjectLogo href='https://boostnote.io'
          target='_blank'>
          <img
            width='100'
            height='100'
            src='/static/images/img-boostnote.jpg' />
        </ProjectLogo>
        <h1>Boostnote</h1>
        <a href='https://boostnote.io'
          className='url'
          target='_blank'>
          boostnote.io
        </a>
        <p>
          Note-taking app
          <br />
          for developers.
        </p>
      </ProjectListItem>
      {/* <ProjectListItem>
        <ProjectLogo href='https://boostlog.io'
          target='_blank'>
          <img
            width='100'
            height='100'
            src='/static/images/img-boostlog.jpg' />
        </ProjectLogo>
        <h1>Boostlog</h1>
        <a href='https://boostlog.io'
          className='url'
          target='_blank'>
          boostlog.io
        </a>
        <p>
          Publication platform
          <br />
          with Markdown.
        </p>
      </ProjectListItem> */}
      <ProjectListItem>
        <ProjectLogo href='https://issuehunt.io'
          target='_blank'>
          <img
            width='100'
            height='100'
            src='/static/images/img-issuehunt.jpg' />
        </ProjectLogo>
        <h1>IssueHunt</h1>
        <a href='https://issuehunt.io'
          className='url'
          target='_blank'>
          issuehunt.io
        </a>
        <p>
          Issue based bounty platform
          <br/>
          for open source projects.
        </p>
      </ProjectListItem>
    </ProjectList>
  </Section>
)

export default ProjectListSection
