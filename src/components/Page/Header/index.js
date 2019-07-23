// @flow
import React from 'react'
import styled from '@emotion/styled'
import Title from './Title'
import { colors, fonts, fontSize, lineUnit, media } from '../../../styles/base'
import LinkImpl from './Link'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4.8rem;
  z-index: 300;

  ${media.mobile`
    // height: 12rem;
    // padding: 4.8rem;
  `};
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  font-family: ${fonts.heading};
  font-size: ${fontSize.small};
  line-height: ${lineUnit};
  height: ${lineUnit};
  z-index: 710;

  ${media.mobile`
    font-size: ${fontSize.normal};
  `};

  ${media.desktop`
    height: auto;
    line-height: 1.2;
  `};
`

const ListItem = styled.li`
  margin-left: 2.4rem;
  display: block;
`

const Link = props => (
  <ListItem>
    <LinkImpl {...props} />
  </ListItem>
)

const Header = () => (
  <Wrapper>
    <Title />
    <List>
      <Link to="/case-studies/">Work</Link>
      <Link blog to="/blog/">
        Blog
      </Link>
      <Link to="/about/">About</Link>
      <Link emphasis to="/about/#contact">
        Contact
      </Link>
      <Link small to="/lists/">
        Lists
      </Link>
    </List>
  </Wrapper>
)

export default Header
