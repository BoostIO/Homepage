import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'

const CorporateSection = () => (
  <Container
    fluid
    style={{ height: '100vh', backgroundColor: '#f8f9fa', display: 'table' }}
  >
    <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
      <Container>
        <Row>
          <Col lg={4}>
            <h4 style={{ textAlign: 'center' }}>RECRUIT</h4>
          </Col>
          <Col lg={8}>
            <h4>
              Empower every person co-create with anyone from anywhere, anytime.
            </h4>
            <p>
              We make open source sustainable ecosystem and transparent the
              developer's credit. Passionate about make the co-create platform
              where every person can work with anyone, anywhere.
            </p>
            <p>
              We are hiring for UI designer and software developer (TypeScript
              and React).
            </p>
            <p>Work with us!</p>
            <Button
              style={{
                backgroundColor: '#fff',
                borderRadius: '0',
                border: '2px solid red',
                float: 'right'
              }}
            >
              <a
                href="https://forms.gle/rAezgViWtqb1ksTg8"
                className="url"
                target="_blank"
                style={{ color: '#000', textDecoration: 'none' }}
              >
                Contact us 🥊
              </a>
            </Button>
          </Col>
        </Row>
      </Container>
    </Row>
  </Container>
)

export default CorporateSection
