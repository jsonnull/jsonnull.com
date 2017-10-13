import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from 'styles/base'
import { background, color, underlineIn, underlineOut } from 'styles/links'
import Overlay from 'components/Overlay'

const Background = styled.div`
  background: ${colors.black};
  padding: 2.4rem;
  position: relative;
  margin-top: auto;
  ${media.mobile`
    padding: 4.8rem;
  `};
`

const Content = styled.div`
  position: relative;
  margin: 0 auto;

  ${media.desktop`
    width: 700px;
  `} ${media.desktopHuge`
    width: 1000px;
  `};
`

const Quote = styled.p`
  font-family: ${fonts.serif};
  color: ${colors.gray};
  font-size: ${fontSize.normal};
  margin: 0 0 4.8rem;
  width: 75%;
  line-height: 2.4rem;
`

const Attrib = styled.span`
  font-family: ${fonts.base};
  color: ${colors.gray};
  font-size: ${fontSize.tiny};
  text-align: right;
  line-height: 2.4rem;
`

const Title = styled.a`
  font-family: ${fonts.heading};
  font-weight: 400;
  font-size: ${fontSize.medium};
  line-height: ${lineUnit};
  margin-bottom: 1.2rem;
  display: inline-block;

  &,
  &:link,
  &:visited,
  &:hover,
  &:active {
    transition: background-size 100ms ease;
    ${props => background(colors.black)} ${color(
        colors.gray
      )} ${underlineOut} background-position: 0 100%;
  }

  &:hover {
    ${underlineIn};
  }
`

const Links = styled.div`line-height: 2.4rem;`

const Link = styled.a`
  font-family: ${fonts.heading};
  font-weight: 400;
  font-size: ${fontSize.normal};
  line-height: ${lineUnit};
  margin-right: 1em;
  display: inline-block;

  &,
  &:link,
  &:visited,
  &:hover,
  &:active {
    transition: background-size 100ms ease;
    ${props => background(colors.black)} ${color(colors.gray)} ${underlineOut};
  }

  &:hover {
    ${underlineIn};
  }
`

const Footer = props => (
  <Background>
    <Overlay
      background={colors.black}
      isMouseOver={props.isMouseOver}
      zOffset={99}
    />
    <Content>
      <Quote>
        "Though we travel the world over to find the beautiful, we must carry it
        with us, or we find it not."
        <Attrib> —&nbsp;Ralph&nbsp;Waldo&nbsp;Emerson</Attrib>
      </Quote>
      <Links>
        <Link href="/">Home</Link>
        <Link href="/writing">Writing</Link>
        <Link href="/work">Work</Link>
        <Link href="/scratch">Scratch</Link>
        <Link href="/contact">Contact</Link>
      </Links>
    </Content>
  </Background>
)

export default Footer
