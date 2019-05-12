// @flow
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { useSpring, useTransition, animated, config } from 'react-spring'
import { I_AM_A } from '../../constants'
import App from './App'
import Sprite from './Sprite'

const lineHeight = `${2.4 * 1.4}rem`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 400;
  flex: 1;
  line-height: ${lineHeight};
`

const AppLocation = styled.div`
  margin: auto;
  width: 45vw;
  height: 30vw;
  overflow: hidden;
  position: relative;
`

const types = [I_AM_A.DESIGNER, I_AM_A.DEVELOPER]

export const SHAPES = {
  SQUARE: 'square',
  RECTANGLE: 'rectangle',
  CIRCLE: 'circle',
  PARAGRAPH: 'paragraph'
}

const interp = i => r => {
  const dx = 15 * Math.sin(r + i * 2 * Math.PI / 1.6)
  const dy = 15 * Math.cos(r + i * 2 * Math.PI / 1.6)
  return `translate(${dx}px, ${dy}px)`
}

const sprites = [
  {
    shape: SHAPES.CIRCLE,
    text: '<Icon\n  to=/contact />',
    dx: '-30vw',
    dy: '15vh'
  },
  {
    shape: SHAPES.SQUARE,
    text: 'GET u/{id}/avatar',
    dx: '-30vw',
    dy: '-15vh'
  },
  {
    shape: SHAPES.PARAGRAPH,
    text: 'query {\n  users {\n    name\n  }\n}',
    dx: '30vw',
    dy: '-15vh'
  },
  {
    shape: SHAPES.RECTANGLE,
    text: '<Button secondary />',
    dx: '30vw',
    dy: '15vh'
  }
]

const Hero = () => {
  const [index, setIndex] = useState(0)
  const type = types[index]

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

  const transitions = useTransition(type, null, {
    from: { outer: 'translateX(100%)', inner: 'translateX(-100%)' },
    enter: { outer: 'translateX(0)', inner: 'translateX(0)' },
    leave: { outer: 'translateX(-100%)', inner: 'translateX(100%)' },
    config: { mass: 1, tension: 280, friction: 80 }
  })

  const [{ radians }] = useSpring(() => ({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 8000 },
    reset: true
  }))

  return (
    <Wrapper>
      <AppLocation>
        {transitions.map(({ item: type, props, key }) => (
          <animated.div
            key={key}
            style={{
              transform: props.outer,
              position: 'absolute',
              overflow: 'hidden'
            }}
          >
            <animated.div
              style={{
                transform: props.inner
              }}
            >
              <App type={type} />
            </animated.div>
          </animated.div>
        ))}
      </AppLocation>
      {sprites.map((sprite, i) => (
        <animated.div
          key={i}
          style={{
            transform: radians.interpolate(interp(i)),
            position: 'absolute',
            left: '50%',
            top: '50%'
          }}
        >
          <Sprite key={sprite.text} {...sprite} type={type} />
        </animated.div>
      ))}
    </Wrapper>
  )
}

export default Hero
