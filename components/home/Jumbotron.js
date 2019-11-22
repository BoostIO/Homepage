import React from 'react'
import styled from 'styled-components'
import { Row, Container, Col } from 'react-bootstrap'

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 250px 10px;
  @media screen and (min-width: 560px) {
    height: auto;
  }
  color: #f2f2f2;
`

const Logo = ({ type, height, alt }) => {
  const Image = styled.img`
    display: block;
  `
  return (
    <Image
      className={`logo-${type}`}
      src={`/static/images/boostio-${type}.svg`}
      alt={alt}
      height={height}
    />
  )
}

const CompanyName = styled.h1`
  align-items: center;
  margin-bottom: 40px;
  color: #f2f2f2;
  font-size: 60px;
  font-weight: 300;
`

const Jumbotron = () => (
  <Wrap fluid>
    <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
      <Container>
        <CompanyName>
          <Row>
            <Col lg={3}>
              <Logo type="img" alt="BoostIO Logo" height={60} />
            </Col>
            <Col lg={4}>
              <p style={{ marginTop: '-5px' }}>BOOSTIO</p>
            </Col>
          </Row>
        </CompanyName>
        <Row>
          <Col lg={4}>
            <a
              href="https://boostio.co/mission"
              className="url"
              style={{ color: '#f2f2f2', textDecoration: 'none' }}
            >
              MISSION
            </a>
          </Col>
          <Col lg={4}>
            <a
              href="https://boostnote.io"
              className="url"
              target="_blank"
              style={{ color: '#f2f2f2', textDecoration: 'none' }}
            >
              BOOSTNOTE
            </a>
          </Col>
          <Col lg={4}>
            <a
              href="https://issuehunt.io"
              className="url"
              target="_blank"
              style={{ color: '#f2f2f2', textDecoration: 'none' }}
            >
              ISSUEHUNT
            </a>
          </Col>
        </Row>
      </Container>
    </Row>
  </Wrap>
)

export default Jumbotron
