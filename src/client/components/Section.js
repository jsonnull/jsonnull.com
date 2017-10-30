// @flow
import * as React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, media } from '../styles/base'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  ${({ mixin = '' }) => mixin};
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2.4rem;
  padding: 7.2rem 0;

  ${media.mobile`
    margin: 0 4.8rem;
  `};
  ${media.tablet`
    padding: 14.4rem 0;
  `};
  ${media.tabletLarge`
    width: 600px;
    margin: 0 auto;
  `};
  ${media.desktopLarge`
    width: 800px;
  `};
  ${media.desktopHuge`
    width: 1000px;
  `};
`

type Props = {
  mixin?: string,
  style?: Object,
  children?: React.Node
}

const Section = (props: Props) => {
  return (
    <Container mixin={props.mixin} style={props.style}>
      <Inner>{props.children}</Inner>
    </Container>
  )
}

export default Section
