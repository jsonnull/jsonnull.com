import React from 'react'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { colors, fonts } from '../../styles/base'
import { color, background } from '../../styles/links'
import '../../styles/normalize.css'
import '../../styles/typeset.css'
import '../../styles/global.css'
import fontLinks from '../../styles/fonts'
import Header from './Header'
import Footer from './Footer'

const globalStyles = css`
  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    ${color(colors.blue)} ${background(colors.white)};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${props => props.background};
`

const Content = styled.div`
  display: flex;
  flex: 1;
  font-family: ${fonts.serif};
`

const Page = ({ children, title = 'Welcome', background = colors.white }) => (
  <Wrapper background={background}>
    <Global styles={globalStyles} />
    <Helmet titleTemplate="%s | Jason Nall">
      <title>{title}</title>
      <link
        href={`//fonts.googleapis.com/css?family=${fontLinks.join('|')}`}
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Wrapper>
)

export default Page
