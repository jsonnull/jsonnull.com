// @flow
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { switchProp } from 'styled-tools'
import { colors, fonts, fontSize } from '../../styles/base'
import { I_AM_A } from '../../constants'
import { SHAPES, SIDES } from './'
import { Square, Circle, Triangle } from './Shapes'

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-left: -25px;
  margin-top: -25px;
  position: relative;
  display: flex;
  ${({ side, x, y }) => {
    const direction = side === SIDES.LEFT ? 'right' : 'left'
    const dx = 330 + 150 * x
    const dy = 130 - 220 * y
    return css`
      ${direction}: ${dx}px;
      bottom: ${dy}px;
    `
  }};
`

const Code = styled.div`
  white-space: pre;
  font-family: ${fonts.monospace};
  color: ${colors.gray300};
  font-size: ${fontSize.small};
  line-height: 1.1;
  font-weight: bold;
  margin: auto;
`
const CodeShape = ({ shape }) =>
  ({
    [SHAPES.SQUARE]: '<sq />',
    [SHAPES.CIRCLE]: '<cr />',
    [SHAPES.TRIANGLE]: '<tri />'
  }[shape])

const DesignShape = ({ shape }) =>
  ({
    [SHAPES.SQUARE]: <Square />,
    [SHAPES.CIRCLE]: <Circle />,
    [SHAPES.TRIANGLE]: <Triangle />
  }[shape])

const Sprite = props => {
  const { sprite, type } = props
  const [shape, side, x, y] = sprite

  return (
    <Wrapper side={side} x={x} y={y}>
      {type === I_AM_A.DEVELOPER && (
        <Code>
          <CodeShape shape={shape} />
        </Code>
      )}
      {type === I_AM_A.DESIGNER && <DesignShape shape={shape} />}
    </Wrapper>
  )
}

export default Sprite
