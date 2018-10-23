import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 160px 10px;
  height: 100vh;
  @media screen and (min-width: 560px) {
    height: auto;
  }
`

const Logo = ({
  type,
  width,
  height,
  alt,
}) => {
  const Image = styled.img`
    display: block;
  `
  return <Image className={`logo-${type}`}
    src={`/static/images/boostio-${type}.svg`}
    alt={alt}
    width={width}
    height={height}
  />
}

const CompanyName = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  .logo-img {
    margin-bottom: 24px;
  }
`

const CompanyDescription = styled.p`
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  font-size: 20px;
  line-height: 1.333333333;
  letter-spacing: .02em;
  text-align: center;
  color: #3d434d;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

const Jumbotron = () => (
  <Container>
    <CompanyName>
      <Logo type='img'
        alt='BoostIO Logo'
        width={160}
        height={80}
      />
      <Logo type='text'
        alt='BoostIO'
        width={135}
        height={28}
      />
    </CompanyName>
    <CompanyDescription>
      The Open Source Enthusiastic Collective
    </CompanyDescription>
  </Container>
)

export default Jumbotron
