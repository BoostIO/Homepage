import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import styled from 'styled-components'

const ProjectList = styled.ul`
  padding-top: 50px;
  padding-left: 0;
  list-style-type: none;
  margin: 0 -10px;
  a {
    color: #f26c50;
    font-style: italic;
  }
  @media (min-width: 540px) {
    display: flex;
    justify-content: center;
    align-content: flex-start;
  }
`

const ProjectListSection = () => (
  <Container
    fluid
    style={{ height: '100vh', backgroundColor: '#f8f9fa', display: 'table' }}
  >
    <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
      <Container
        fluid
        style={{
          height: '100vh',
          backgroundColor: '#f8f9fa',
          display: 'table'
        }}
      >
        <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
          <Container>
            <ProjectList>
              <Row>
                <Col md={5}>
                  <img
                    width="80%"
                    src="/static/images/issuehunt-image.png"
                    float="center"
                  />
                </Col>
                <Col md={7}>
                  <h1>
                    IssueHunt
                    <img
                      width="60"
                      height="60"
                      src="/static/images/img-issuehunt.png"
                    />
                  </h1>

                  <a
                    href="https://issuehunt.io"
                    className="url"
                    target="_blank"
                  >
                    issuehunt.io
                  </a>
                  <p>
                    An issue-based bounty platform for open source projects.
                  </p>
                  <p>
                    Popular open-source projects such as Jekyll (37k GitHub
                    stars), Material-UI (45k GitHub stars) and AntDesign (34k
                    GitHub stars) are using IssueHunt.
                  </p>
                  <a href="https://issuehunt.io/sponsors">About Sponsorship</a>
                </Col>
              </Row>
            </ProjectList>
          </Container>
        </Row>
      </Container>

      <Container
        fluid
        style={{ height: '100vh', backgroundColor: '#fff', display: 'table' }}
      >
        <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
          <Container>
            <ProjectList>
              <Row>
                <Col md={7}>
                  <h1>
                    Boostnote
                    <img
                      width="60"
                      height="60"
                      src="/static/images/img-bnote.png"
                      float="center"
                    />
                  </h1>
                  <a
                    href="https://boostnote.io"
                    className="url"
                    target="_blank"
                  >
                    boostnote.io
                  </a>
                  <p>
                    An open source markdown editor for developers on Mac,
                    Windows and Linux.
                  </p>
                  <p>1.4k GitHub stars.</p>
                </Col>
                <Col md={5}>
                  <img
                    width="100%"
                    src="/static/images/boostnote-image.png"
                    float="center"
                  />
                </Col>
              </Row>
            </ProjectList>
          </Container>
        </Row>
      </Container>
    </Row>
  </Container>
)

export default ProjectListSection
