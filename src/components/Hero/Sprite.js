// @flow
import React from 'react'
import styled from '@emotion/styled'
import { switchProp } from 'styled-tools'
import { colors, fonts, fontSize } from '../../styles/base'
import { I_AM_A } from '../../constants'
import { SHAPES } from './'

const design = colors.blue300

const Wrapper = styled.div`
  width: 300px;
  height: 100px;
  margin-left: -150px;
  margin-top: -25px;
  position: absolute;
  display: flex;
  transform: ${props => `translate3d(${props.dx}, ${props.dy}, 0)`};
`
const Code = styled.div`
  white-space: pre;
  font-family: ${fonts.monospace};
  color: ${colors.gray400};
  font-size: ${fontSize.small};
  line-height: 1.1;
  font-weight: bold;
  margin: auto;
`

const Circle = styled.div`
  width: 42px;
  height: 42px;
  margin: auto;
  border-radius: 25px;
  background: ${design};
`
const Square = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
  border-radius: 10px;
  background: ${design};
`
const Rectangle = styled.div`
  width: 80px;
  height: 40px;
  margin: auto;
  border-radius: 3px;
  background: ${design};
`

const Line = styled.div`
  height: 9px;
  border-radius: 3px;
  background: ${design};
  margin-bottom: 2px;
  width: ${props => `${props.width * 10}px`};
`
const ParagraphWrapper = styled.div`
  margin: auto;
`
const Paragraph = () => (
  <ParagraphWrapper>
    <Line width={4} />
    <Line width={5} />
    <Line width={2} />
    <Line width={3} />
  </ParagraphWrapper>
)

const Designer = props => {
  const { shape } = props
  const Component = {
    [SHAPES.CIRCLE]: Circle,
    [SHAPES.SQUARE]: Square,
    [SHAPES.RECTANGLE]: Rectangle,
    [SHAPES.PARAGRAPH]: Paragraph
  }[shape]

  return <Component />
}
const Developer = props => {
  const { text } = props
  return <Code>{text}</Code>
}

const Sprite = props => {
  const { shape, text, dx = 0, dy = 0, type } = props
  const Component = {
    [I_AM_A.DESIGNER]: Designer,
    [I_AM_A.DEVELOPER]: Developer
  }[type]

  return (
    <Wrapper dx={dx} dy={dy} type={type}>
      <Component text={text} shape={shape} />
    </Wrapper>
  )
}

export default Sprite
