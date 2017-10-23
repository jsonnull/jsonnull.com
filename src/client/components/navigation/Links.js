/* @flow */
import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from 'styles/base'
import { background, color, underlineIn, underlineOut } from 'styles/links'

type Props = {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 7.2rem;
  left: 100px;
  background: ${colors.white};
  padding: 2.4rem;
  padding-left: 0;
  z-index: 300;

  ${media.mobile`
    height: 12rem;
    left: 170px;
    padding: 4.8rem;
    padding-left: 0;
  `};
  ${media.desktop`
    background: transparent;
    width: 200px;
    height: auto;
    left: auto;
    bottom: 0;
  `};
`

const List = styled.ul`
  text-align: right;
  font-family: ${fonts.heading};
  font-size: ${fontSize.small};
  line-height: 1.2;
  z-index: 710;
  letter-spacing: 0.1;

  ${media.mobile`
    font-size: ${fontSize.normal};
  `};
`

const Link = styled.li`
  margin-left: 1rem;
  margin-bottom: 1.2rem;
  display: inline-block;

  ${props => {
    if (props.small) {
      return `font-weight: normal;`
    }
    return `font-weight: 700;`
  }};

  ${media.desktop`
    display: block;
  `};
  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    transition: background-size 100ms ease;
    text-shadow: none;
    ${props => {
      if (props.small) {
        return color(colors.gray)
      } else if (props.emphasis) {
        return color(colors.blue)
      }
      return color(colors.black)
    }};
    ${underlineOut};
  }

  a:hover {
    background-size: ${props => (props.blog ? '60% 1px' : '100% 1px')};
  }
`

const Source = styled.div`
  margin-top: auto;
  line-height: $lineUnit;
  color: ${colors.gray};
  text-align: right;
  font-size: ${fontSize.tiny};
  display: none;

  ${media.desktop`
    display: block;
    font-size: ${fontSize.small};
  `};
  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    transition: background-size 100ms ease;
    text-shadow: none;
    ${color(colors.gray)} ${underlineOut};
  }

  a:hover {
    text-shadow: none;
    ${underlineIn};
  }
`

const Links = () => (
  <Wrapper>
    <List>
      <Link>
        <a href="/case-studies">Work</a>
      </Link>
      <Link blog={true}>
        <a href="/blog">Blog</a>
      </Link>
      <Link>
        <a href="/about">About</a>
      </Link>
      <Link emphasis>
        <a href="/about#contact">Contact</a>
      </Link>
      <Link small>
        <a href="/lists">Lists</a>
      </Link>
    </List>
    <Source>
      <a href="https://github.com/jsonnull/jsonnull.com">Source on GitHub</a>
    </Source>
  </Wrapper>
)

export default Links
