import React from 'react'
import styled, { injectGlobal } from 'react-emotion'
import { colors } from '../styles/base'
import { color, background } from '../styles/links'
import Helmet from 'react-helmet'
import '../styles/normalize.css'
import '../styles/typeset.css'
import '../styles/global.css'
import fonts from '../styles/fonts'

injectGlobal`
  a, a:link, a:visited, a:hover, a:active {
    ${color(colors.blue)}
    ${background(colors.white)}
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${props => (props.dark ? colors.darkGray : colors.white)};
`

const Layout = ({ children, dark }) => (
  <Wrapper dark={dark}>
    <Helmet titleTemplate="%s | Jason Nall">
      <title>Welcome</title>
      <link
        href={`//fonts.googleapis.com/css?family=${fonts.join('|')}`}
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
    {children}
  </Wrapper>
)

export default Layout
