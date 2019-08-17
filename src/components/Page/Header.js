// @flow
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link as LinkImpl } from 'gatsby'
import { colors, fonts, fontSize, lineUnit, media } from '../../styles/base'
import { noUnderline } from '../../styles/links'

const paddingMobile = '2.4rem'
const paddingDesktop = '4.8rem'

const linkStyles = css`
  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: ${colors.gray500};
    transition: color 200ms ease;
    ${noUnderline};
  }

  a:hover {
    color: ${colors.gray900};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${paddingMobile};
  z-index: 300;
  line-height: ${lineUnit};
  ${media.tablet} {
    padding: ${paddingDesktop};
  }
`

const Title = styled.h1`
  font-family: ${fonts.heading};
  font-size: ${fontSize.medium};
  text-transform: lowercase;
  font-weight: 700;
  letter-spacing: -0.01em;

  height: ${lineUnit};
  ${linkStyles};
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: auto;

  font-size: ${fontSize.normal};
  text-transform: lowercase;
  letter-spacing: -0.01em;

  height: ${lineUnit};
  ${linkStyles};
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
    <Title>
      <LinkImpl to="/">jsonnull</LinkImpl>
    </Title>
    <List>
      <Link to="/blog/">Blog</Link>
      <Link to="/about/">About</Link>
    </List>
  </Wrapper>
)

export default Header
