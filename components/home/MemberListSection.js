import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const MemberList = styled.ul`
  padding-left: 0;
  margin-top: 56px;
  list-style-type: none;
  margin: 0 -10px;
  @media (min-width: 540px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
  }
`

const MemberListItem = styled.li`
  width: 100%;
  padding: 0 20px;
  text-align: center;
  :not(:first-child) {
    margin-top: 64px;
  }
  h1 {
    margin-top: 16px;
    margin-bottom: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: .01em;
    color: #3d434d;
  }
  a {
    position: relative;
    display: block;
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
  .url {
    margin-bottom: 24px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    color: #3d434d;
  }
  .profile {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
  }

  @media screen and (min-width: 540px) {
    width: 35%;
    padding: 0 10px;
    :nth-child(3),
    :nth-child(4),
    :nth-child(5),
    :nth-child(6),
    :nth-child(7) {
      margin-top: 56px;
    }
    :nth-child(2) {
      margin-top: 0;
    }
  }


  @media screen and (min-width: 768px) {
    width: 25%;
    :nth-child(3),
    :nth-child(4) {
      margin-top: 0;
    }
  }
`

const MemberOuterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    font-size: 1rem;
    line-height: 24px;
    color: #bdc1c9;
  }
  .twitter:hover {
    color: #0084ff;
  }
  .github:hover {
    color: #24292e;
  }
  .mail:hover {
    color: #00c786;
  }
`

const MemberProfileImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 160px;
  margin: 0 auto;
  transition: transform 300ms;
  ::after {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 8px;
    left: 50%;
    width: 80%;
    height: 0;
    padding-bottom: 80%;
    border-radius: 2px;
    transform: translateX(-50%);
    box-shadow: 0 2px 25px 0 rgba(0, 0, 0, .3);
    background-color: #fff;
    transition: box-shadow 300ms;
  }
  :hover {
    transform: translateY(3px);
    ::after {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .7);
    }
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`

const MemberListSection = () => (
  <Section title='Team'>
    <MemberList>
      <MemberListItem>
        <MemberProfileImage>
          <img alt='Profile'
            src='/static/images/member-kazz.png' />
        </MemberProfileImage>
        <h1>Kazz Yokomizo / KZ</h1>
        <MemberOuterLinks>
          <a target='_blank'
            className='github'
            href='https://github.com/kazup01'>
            <i className='fab fa-github' />
          </a>
          <a target='_blank'
            className='twitter'
            href='https://twitter.com/kazup_bot'>
            <i className='fab fa-twitter' />
          </a>
          <a target='_blank'
            className='mail'
            href='mailto:kazz@boostio.co'>
          <i className='fa fa-envelope' />
        </a>
        </MemberOuterLinks>
      </MemberListItem>

      <MemberListItem>
        <MemberProfileImage>
          <img alt='Profile'
            src='/static/images/member-junyoung.jpg' />
        </MemberProfileImage>
        <h1>Junyoung Choi</h1>
        <MemberOuterLinks>
          <a target='_blank'
            className='github'
            href='https://github.com/rokt33r'>
            <i className='fab fa-github' />
          </a>
          <a target='_blank'
            className='mail'
            href='mailto:rokt33r@boostio.co'>
            <i className='fa fa-envelope' />
          </a>
        </MemberOuterLinks>
      </MemberListItem>

      <MemberListItem>
        <MemberProfileImage>
          <img alt='Profile'
            src='/static/images/member-sadakoa.jpg' />
        </MemberProfileImage>
        <h1>Sadakoa</h1>
        <MemberOuterLinks>
          <a target='_blank'
            className='github'
            href='https://github.com/sadakoa'>
            <i className='fab fa-github' />
          </a>
          <a target='_blank'
            className='twitter'
            href='https://twitter.com/sadako_a_'>
            <i className='fab fa-twitter' />
          </a>
        </MemberOuterLinks>
      </MemberListItem>

      <MemberListItem>
        <MemberProfileImage>
          <img alt='Profile'
            src='/static/images/member-woohyeon.jpg' />
        </MemberProfileImage>
        <h1>Woohyeon Roh</h1>
        <MemberOuterLinks>
          <a target='_blank'
            className='github'
            href='https://github.com/rohjs'>
            <i className='fab fa-github' />
          </a>
        </MemberOuterLinks>
      </MemberListItem>

      <MemberListItem>
        <MemberProfileImage>
          <img alt='Profile'
            src='/static/images/member-sheenan.jpeg' />
        </MemberProfileImage>
        <h1>Sheenan Tenepre</h1>
        <MemberOuterLinks>
          <a target='_blank'
            className='github'
            href='https://github.com/therealedsheenan'>
            <i className='fab fa-github' />
          </a>
        </MemberOuterLinks>
      </MemberListItem>

      <MemberListItem>
        <MemberProfileImage>
          <img alt='Profile'
            src='/static/images/member-kaga.png' />
        </MemberProfileImage>
        <h1>Kagayaki Kawabata</h1>
        <MemberOuterLinks>
          <a target='_blank'
            className='github'
            href='https://github.com/krk324'>
            <i className='fab fa-github' />
          </a>
        </MemberOuterLinks>
      </MemberListItem>

      <MemberListItem>
        <MemberProfileImage>
          <img alt='Profile'
            src='/static/images/member-song.jpeg' />
        </MemberProfileImage>
        <h1>Joohoun Song</h1>
        <MemberOuterLinks>
          <a target='_blank'
            className='github'
            href='https://twitter.com/joohounsong'>
            <i className='fab fa-twitter' />
          </a>
          <a target='_blank'
            className='mail'
            href='mailto:joohoun@boostio.co'>
            <i className='fa fa-envelope' />
          </a>
          <a target='_blank'
            className='github'
            href='https://github.com/hunnycode'>
            <i className='fab fa-github' />
          </a>
        </MemberOuterLinks>
      </MemberListItem>

      <MemberListItem>
        <MemberProfileImage>
          <img alt='Profile'
            src='/static/images/member-suzuki.jpg' />
        </MemberProfileImage>
        <h1>Sosuke Suzuki</h1>
        <MemberOuterLinks>
          <a target='_blank'
            className='github'
            href='https://github.com/sosukesuzuki'>
            <i className='fab fa-github' />
          </a>
        </MemberOuterLinks>
      </MemberListItem>

      <MemberListItem>
        <MemberProfileImage>
          <img alt='Profile'
            src='/static/images/member-zerox.jpeg' />
        </MemberProfileImage>
        <h1>Nguyen Viet Hung</h1>
        <MemberOuterLinks>
          <a target='_blank'
            className='github'
            href='https://github.com/ZeroX-DG'>
            <i className='fab fa-github' />
          </a>
        </MemberOuterLinks>
      </MemberListItem>

      <MemberListItem>
        <MemberProfileImage>
          <img alt='Profile'
            src='/static/images/member-hiya.jpg' />
        </MemberProfileImage>
        <h1>Shuhei Hiya</h1>
        <MemberOuterLinks>
          <a target='_blank'
            className='github'
            href='https://github.com/syuhei176'>
            <i className='fab fa-github' />
          </a>
        </MemberOuterLinks>
      </MemberListItem>

      <MemberListItem>
        <MemberProfileImage>
          <img alt='Profile'
            src='/static/images/member-junpei.jpg' />
        </MemberProfileImage>
        <h1>Jumpei Shimotsu</h1>
        <MemberOuterLinks>
          <a target='_blank'
            className='github'
            href='https://github.com/junp1234'>
            <i className='fab fa-github' />
          </a>
          <a target='_blank'
            className='mail'
            href='mailto:junp@boostio.co'>
            <i className='fa fa-envelope' />
          </a>
        </MemberOuterLinks>
      </MemberListItem>

    </MemberList>

  </Section>
)

export default MemberListSection
