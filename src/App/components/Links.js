/* @flow */
import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, lineUnit } from 'styles/base'

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
    color: ${colors.black};
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

  a {
    color: ${colors.gray};
  }
`

class Links extends React.Component<*, Props, *> {
  render () {
    return (
      <Wrapper>
        <List>
          <Link><a href="/writing">Writing</a></Link>
          <Link><a href="/work">Work</a></Link>
          <Link><a href="/scratch">Scratch</a></Link>
          <Link><a href="/contact">Contact</a></Link>
        </List>
        <Source>
          <a href="https://github.com/jsonnull/jsonnull.com">
            Source on GitHub
          </a>
        </Source>
      </Wrapper>
    )
  }
}

export default Links
