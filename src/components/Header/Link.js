/* @flow */
import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import { colors } from '../../styles/base'
import { color, underlineOut } from '../../styles/links'

const LinkWrapper = styled.span`
  ${props => (props.small ? `font-weight: normal` : `font-weight: 700`)};

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    transition: background-size 100ms ease;
    text-shadow: none;
    ${props => {
      if (props.small) {
        return color(colors.gray500)
      } else if (props.emphasis) {
        return color(colors.blue)
      }
      return color(colors.gray100)
    }};
    ${underlineOut};
  }

  a:hover {
    background-size: ${props => (props.blog ? '60% 1px' : '100% 1px')};
  }
`

type Props = {
  to: string,
  small: boolean,
  emphasis: boolean,
  blog: boolean,
  children?: React.Node
}

const Element = (props: Props) => {
  const { to, children = '', ...restProps } = props
  return (
    <LinkWrapper {...restProps}>
      <Link to={to}>{children}</Link>
    </LinkWrapper>
  )
}

export default Element
