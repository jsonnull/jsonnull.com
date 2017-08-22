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
`

const List = styled.ul`
  position: absolute;
  top: ${padding};
  right: ${padding};
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
      </Wrapper>
    )
  }
}

export default Links
