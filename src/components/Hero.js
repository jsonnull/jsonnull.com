// @flow
import React from 'react'
import styled from '@emotion/styled'
import { colors, fonts, fontSize } from '../styles/base'

const lineHeight = `${2.4 * 1.4}rem`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  width: 63vw;
  min-height: 22vw;
  line-height: ${lineHeight};
  margin: auto;
  position: relative;
`

const App = styled.div`
  position: absolute;
  margin-left: 50%;
  width: 50%;
  height: 100%;
  background: ${colors.gray900};
  overflow: hidden;
  border-radius: 8px;
`

const Text = styled.h1`
  font-family: ${fonts.heading};
  font-weight: 300;
  color: black;
  margin: auto 0;
  font-size: 4.5vw;
  line-height: 0.95;
  letter-spacing: -0.02em;
`

const Heavy = styled.div`
  font-weight: 400;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: -100%;
`
const Hidden = styled(Text)`
  color: white;
`

const Hero = () => {
  return (
    <Wrapper>
      <Text>
        <Heavy>web experience</Heavy>
        designer &amp; developer
      </Text>
      <App>
        <Box>
          <Hidden>
            <Heavy>web experience</Heavy>
            designer &amp; developer
          </Hidden>
        </Box>
      </App>
    </Wrapper>
  )
}

export default Hero
