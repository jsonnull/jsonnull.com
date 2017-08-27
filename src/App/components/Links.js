/* @flow */
import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, lineUnit } from 'styles/base'
import { background, color, underlineIn, underlineOut } from 'styles/links'

type Props = {
}

const padding = '4.8rem'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: ${padding};
`

const List = styled.ul`
  text-align: right;
  font-family: ${fonts.heading};
  font-weight: 700;
  font-size: ${fontSize.normal};
  line-height: ${lineUnit};
  z-index: 710;

  a, a:link, a:visited, a:hover, a:active {
    transition: background-size ease 100ms;
    ${props => background(props.background)}
    ${color(colors.black)}
    ${underlineOut}
  }

  a:hover {
    ${underlineIn}
  }
`

const Link = styled.li`
  margin-left: 1rem;
  margin-bottom: 1.2rem;
`

const Source = styled.div`
  margin-top: auto;
  line-height: $lineUnit;
  font-size: ${fontSize.small};
  color: ${colors.gray};
  text-align: right;

  a, a:link, a:visited, a:hover, a:active {
    transition: background-size ease 100ms;
    ${props => background(props.background)}
    ${color(colors.gray)}
    ${underlineOut}
  }

  a:hover {
    ${underlineIn}
  }
`

const Links = (props) => {
  const { background = colors.white } = props

  return (
    <Wrapper>
      <List background={background}>
        <Link><a href="/writing">Writing</a></Link>
        <Link><a href="/work">Work</a></Link>
        <Link><a href="/scratch">Scratch</a></Link>
        <Link><a href="/contact">Contact</a></Link>
      </List>
      <Source background={background}>
        <a href="https://github.com/jsonnull/jsonnull.com">
          Source on GitHub
        </a>
      </Source>
    </Wrapper>
  )
}

export default Links
