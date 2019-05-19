// @flow
import React from 'react'
// import { css } from '@emotion/core'
import styled from '@emotion/styled'
// import { switchProp } from 'styled-tools'
import { colors, fonts, fontSize } from '../../styles/base'

export const Circle = styled.div`
  margin: auto;
  width: 35px;
  height: 35px;
  border-radius: 35px;
  border: 2px solid ${colors.gray300};
`

export const Square = styled.div`
  margin: auto;
  width: 35px;
  height: 35px;
  border: 2px solid ${colors.gray300};
`

export const Triangle = () => {
  const w = 40
  const h = w * 0.866

  return (
    <svg height={h} width={w}>
      <polygon
        points={`0,${h - 1} ${w / 2},0 ${w},${h - 1}`}
        style={{
          stroke: colors.gray300,
          strokeWidth: 2,
          fill: 'none'
        }}
      />
    </svg>
  )
}
