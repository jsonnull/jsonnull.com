/* @flow */
import React from 'react'
import styled from 'styled-components'
import * as style from 'styles/base'

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
  font-family: ${style.heading};
  font-weight: 700;
  font-size: ${style.fontSize};
  line-height: ${style.lineUnit};
  z-index: 710;

  a, a:link, a:visited, a:hover, a:active {
    color: ${style.black};
  }
`

const Link = styled.li`
  margin-left: 1rem;
  margin-bottom: 1.2rem;
`

const Source = styled.div`
  margin-top: auto;
  line-height: $lineUnit;
  font-size: ${style.fontSizeSmall};
  color: ${style.gray};
  text-align: right;

  a {
    color: ${style.gray};
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
