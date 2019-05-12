/* @flow */
import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { colors, fontSize } from '../../../styles/base'
import { color, underlineOut } from '../../../styles/links'

const LinkWrapper = styled.span`
  font-weight: 700;

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-transform: lowercase;
    transition: background-size 100ms ease;
    text-shadow: none;
    ${color(colors.gray900)};
    ${underlineOut};
  }

  a:hover {
    background-size: ${props => (props.blog ? '60% 1px' : '100% 1px')};
  }
`

type Props = {
  to: string,
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
