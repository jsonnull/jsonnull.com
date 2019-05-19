// @flow
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { useSpring, useTransition, animated, config } from 'react-spring'
import { I_AM_A } from '../../constants'
import { colors, fonts, fontSize } from '../../styles/base'
import App from './App'
import Sprite from './Sprite'

const lineHeight = `${2.4 * 1.4}rem`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  width: 960px;
  min-height: 600px;
  line-height: ${lineHeight};
  margin: auto;
  position: relative;
`

const AppLocation = styled.div`
  width: 650px;
  height: 380px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  margin: 0 auto auto;
`

const Headline = styled.h1`
  margin: auto 0 0;
  font-weight: normal;
  font-size: 3.2rem;
  font-family: ${fonts.heading};
  font-weight: 300;
  letter-spacing: -0.03em;
  margin-bottom: 4.8rem;
  text-align: center;
`

const ShadowContainer = styled.div`
  width: 960px;
  height: 168px;
  position: absolute;
  top: 50%;
  margin-top: 130px;
`
const Shadow = () => {
  return (
    <ShadowContainer>
      <svg width="960" height="168">
        <pattern
          id="diagonalHatch"
          width="10"
          height="10"
          patternTransform="rotate(45 0 0)"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            style={{
              stroke: colors.gray500,
              strokeWidth: 1
            }}
          />
        </pattern>{' '}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#diagonalHatch)"
        />
      </svg>
    </ShadowContainer>
  )
}

const Title = styled.span`
  font-weight: bold;
`

const types = [I_AM_A.DESIGNER, I_AM_A.DEVELOPER]
export const SHAPES = {
  CIRCLE: 'circle',
  TRIANGLE: 'triangle',
  SQUARE: 'square'
}
export const SIDES = {
  LEFT: 'left',
  RIGHT: 'right'
}

const interp = i => r => {
  const x = 5 * Math.sin(r + i * 2 * Math.PI / 1.6)
  const y = 3 * Math.cos(r + i * 2 * Math.PI / 1.6)

  return `translate(${x}px, ${y}px)`
}

const sprites = [
  [SHAPES.SQUARE, SIDES.LEFT, 0.7, 0.2],
  [SHAPES.CIRCLE, SIDES.LEFT, 0.3, 0.5],
  [SHAPES.TRIANGLE, SIDES.LEFT, 0.6, 0.85],
  [SHAPES.CIRCLE, SIDES.RIGHT, 0.7, 0.2],
  [SHAPES.TRIANGLE, SIDES.RIGHT, 0.3, 0.5],
  [SHAPES.SQUARE, SIDES.RIGHT, 0.5, 0.85]
]

const Hero = () => {
  const [index, setIndex] = useState(0)
  const type = types[index]

  // Cycle through hero states
  useEffect(() => {
    setInterval(() => {
      setIndex(index => {
        if (index === types.length - 1) {
          return 0
        }
        return index + 1
      })
    }, 4500)
  }, [])

  // The main app transition
  const appTransitions = useTransition(type, null, {
    from: { outer: 'translateX(100%)', inner: 'translateX(-100%)' },
    enter: { outer: 'translateX(0)', inner: 'translateX(0)' },
    leave: { outer: 'translateX(-100%)', inner: 'translateX(100%)' },
    config: { mass: 1, tension: 300, friction: 40 }
  })

  // Jiggle of side elements
  const [{ radians }] = useSpring(() => ({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 8000 },
    reset: true
  }))

  // Fade the set of sprites
  const spriteTransitions = useTransition(type, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { mass: 1, tension: 280, friction: 80 }
  })

  return (
    <Wrapper>
      <Shadow />
      <Headline>
        I <Title>{type}</Title> experiences.
      </Headline>
      <AppLocation>
        {appTransitions.map(({ item: type, props, key }) => (
          <animated.div
            key={key}
            style={{
              transform: props.outer,
              position: 'absolute',
              width: '100%',
              height: '100%',
              overflow: 'hidden'
            }}
          >
            <animated.div
              style={{
                transform: props.inner,
                position: 'absolute',
                width: '100%',
                height: '100%'
              }}
            >
              <App type={type} />
            </animated.div>
          </animated.div>
        ))}
      </AppLocation>
      {spriteTransitions.map(({ item: type, props, key }) =>
        sprites.map((sprite, i) => (
          <animated.div
            key={i}
            style={{
              ...props,
              transform: radians.interpolate(interp(i)),
              position: 'absolute',
              left: '50%',
              top: '50%'
            }}
          >
            <Sprite sprite={sprite} type={type} />
          </animated.div>
        ))
      )}
    </Wrapper>
  )
}

export default Hero
