import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const MemberList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  justify-content: center;
  @media(max-width: 540px) {
    flex-direction: column;
  }
  li {
    padding: 0 15px;
    text-align: center;
  }
  li img {
    border-radius: 50%;
  }
  li h3 {
    margin-bottom: 0px;
  }
  li p {
    margin-top: 10px;
  }
  li p a {
    margin: 0 5px;
  }
`

const MemberListSection = () => (
  <Section title='About us'>
    <MemberList>
      <li>
        <img alt='profile image' src='https://avatars.githubusercontent.com/u/8602615?s=120&v=4' />
        <h3>Kazumasa Yokomizo</h3>
        <p>
          <a target='_blank' href='https://github.com/kazup01'><i className='fab fa-github' /></a>
          <a target='_blank' href='https://twitter.com/kazup_bot'><i className='fab fa-twitter' /></a>
          <a target='_blank' href='mailto:kazz@boostio.co'><i className='fa fa-envelope' /></a>
        </p>
      </li>
      <li>
        <img alt='profile image' src='https://avatars.githubusercontent.com/u/5865853?s=120&v=4' />
        <h3>Junyoung Choi</h3>
        <p>
          <a target='_blank' href='https://github.com/rokt33r'><i className='fab fa-github' /></a>
          <a target='_blank' href='mailto:rokt33r@boostio.co'><i className='fa fa-envelope' /></a>
        </p>
      </li>
      <li>
        <img alt='profile image' src='https://avatars2.githubusercontent.com/u/32901422?s=120&v=4' />
        <h3>Junpei Shimotsu</h3>
        <p>
          <a target='_blank' href='https://github.com/junp1234'><i className='fab fa-github' /></a>
          <a target='_blank' href='mailto:junp@boostio.co'><i className='fa fa-envelope' /></a>
        </p>
      </li>
      <li>
        <img alt='profile image' src='https://avatars.githubusercontent.com/u/14838850?s=120&v=4' />
        <h3>Sosuke Suzuki</h3>
        <p>
          <a href='https://github.com/sosukesuzuki'><i className='fab fa-github' /></a>
        </p>
      </li>
    </MemberList>
  </Section>
)

export default MemberListSection