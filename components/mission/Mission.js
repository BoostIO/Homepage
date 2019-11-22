import React from 'react'
import styled from 'styled-components'
import { Container, Jumbotron, Row } from 'react-bootstrap'
import Header from './Header'

const Wrap = styled.section`
  color: #f2f2f2;
`

const CompanyName = styled.h1`
  align-items: center;
  font-size: 60px;
  font-weight: 300;
`

const Mission = () => (
  <Wrap>
    <Container>
      <Header />
      <Jumbotron
        style={{
          background: 'transparent',
          paddingTop: '140px',
          paddingBottom: '20px'
        }}
      >
        <h5>✌️Vision: Liberate everyone’s creativity.</h5>
        <br />
        <p>
          In the 21st century, many services and industries will be replaced by
          technology as computers take the simple and easily automated work from
          humans. In this new era we will be freed to focus on what only humans
          can do, Creativity and Creation. The programmer is the lynch pin
          between these worlds and is one of the most import creaters in todays
          society.
        </p>
      </Jumbotron>
      <Jumbotron
        style={{
          background: 'transparent',
          paddingTop: '0',
          paddingBottom: '20px'
        }}
      >
        <h5>
          🎯Mission: Empower creators by realizing the standards of tomorrow.
        </h5>
        <br />
        <p>
          We, BoostIO will be a conductor for creators. We will provide a
          platform on which they can bring out full of their potential. We will
          guide them and the era in the right direction. Let's bring new values
          with a new standard of work, living, evaluation and everything through
          co-creation.
        </p>
      </Jumbotron>

      <Container>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScZmeXdMhA6ZfKrYwrHNJkeWYv-VCtxOSn9BEH8UbpP4tsVuA/viewform?usp=sf_link"
          className="url"
          target="_blank"
          style={{
            color: '#f2f2f2',
            textDecoration: 'none',
            paddingLeft: '15px'
          }}
        >
          💌Contact
        </a>
      </Container>
      <Container>
        <img
          src="/static/images/685A8003.jpg"
          style={{
            height: '420px',
            paddingLeft: '15px',
            paddingBottom: '80px',
            paddingTop: '20px'
          }}
        />
      </Container>
    </Container>
  </Wrap>
)

export default Mission
