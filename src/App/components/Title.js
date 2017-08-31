/* @flow */
import React from 'react'
import styled from 'styled-components'
import feather from 'feather-icons'
import { colors, fonts, fontSize, lineUnit, media } from 'styles/base'
import { background, color, underlineIn, underlineOut } from 'styles/links'

type Props = {
  home: boolean
}

const Description = styled.h2`
  display: none;
  font-size: ${fontSize.small};
  color: ${colors.gray};
  font-weight: 700;

  /*
  @media (min-width: $tablet) {
    display: block;
  }
  */
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7.2rem;
  padding: 2.4rem;
  padding-right: 0;
  background: ${colors.white};

  ${media.mobile`
    height: 12rem;
    padding: 4.8rem;
    padding-right: 0;
  `}

  ${media.desktop`
    height: auto;
    right: auto;
    background: transparent;
    width: 200px;
    bottom: 0;
  `}
`

const Title = styled.h1`
  font-size: ${fontSize.normal};
  font-family: ${fonts.heading};
  line-height: ${lineUnit};
  height: ${lineUnit};
  z-index: 700;
  color: ${colors.black};

  ${media.mobile`
    font-size: ${fontSize.large};
  `}

  a, a:link, a:visited, a:hover, a:active {
    transition: background-size 100ms ease;
    text-shadow: none;
    ${color(colors.black)}
    ${underlineOut}
    background-position: 0 100%;
  }

  a:hover {
    text-shadow: none;
    ${underlineIn}
  }
`

const Social = styled.div`
  margin-top: auto;
`

const SocialLink = styled.a`
  background: none !important;
`

const IconWrapper = styled.div`
  height: ${lineUnit};
  line-height: ${lineUnit};
  margin-top: 1.2rem;
  padding-top: 2px;
  display: none;
  margin-right: 1rem;

  ${media.mobile`
    display: inline-block;
  `}

  ${media.desktop`
    display: block;
  `}
`

const Icon = ({ name, href }) => (
  <SocialLink href={href} target="_blank">
    <IconWrapper dangerouslySetInnerHTML={{
      __html: feather.toSvg(name, {
        color: colors.gray,
        width: 20,
        height: 20
      })
    }} />
  </SocialLink>
)

const Header = props => (
  <Wrapper>
    <Title>
      <a href='/'>Jason Nall</a>
    </Title>
    <Description>
      Designer &amp; Developer
    </Description>
    <Social>
      <Icon name='github' href="https://github.com/jsonnull" />
      <Icon name='twitter' href="https://twitter.com/jsonnull" />
    </Social>
  </Wrapper>
)

export default Header
