// @flow
import React from 'react'
import styled from '@emotion/styled'
import { switchProp } from 'styled-tools'
import { colors, fonts, fontSize } from '../../styles/base'
import { I_AM_A } from '../../constants'

const switchType = defs => switchProp('type', defs)

const AppBackground = styled.div`
  display: flex;
  flex-direction: column;
  background: ${switchType({
    [I_AM_A.DESIGNER]: colors.blue500,
    [I_AM_A.DEVELOPER]: colors.gray900
  })};
  border-radius: 8px;
  height: 100%;
`

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  margin: auto 0 auto 6px;
  background: ${switchType({
    [I_AM_A.DESIGNER]: colors.blue400,
    [I_AM_A.DEVELOPER]: colors.gray600
  })};
`

const Titlebar = styled.div`
  display: flex;
  flex-direction: row;
  height: 32px;
`

const Stoplights = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 4px;
`

const Content = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  margin-bottom: 32px;
  color: ${colors.gray100};
  font-family: ${fonts.heading};
  font-size: ${fontSize.medium};
`

const Designer = styled.div``

const Developer = styled.div`
  font-family: ${fonts.monospace};
  font-size: 0.95em;
  letter-spacing: -0.08em;
`

const App = props => {
  const { type } = props
  return (
    <AppBackground type={type}>
      <Titlebar>
        <Stoplights>
          {[0, 1, 2].map(i => <Circle key={i} type={type} />)}
        </Stoplights>
      </Titlebar>
      <Content />
    </AppBackground>
  )
}

export default App
