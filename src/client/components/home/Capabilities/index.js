/* @flow */
import * as React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from '../../../styles/base'
import Area from './Area'
import Paragraph from './Paragraph'
import Heading from './Heading'
import Section from '../../Section'
import * as projects from '../../../projects'

const borderColor = colors.lightGray

const capes = [
  {
    title: 'JavaScript',
    color: colors.blue,
    names: ['React & Redux', 'Flow', 'Webpack', 'ES6+'],
    description:
      'A fundamental web technology with rapidly developing modern practices. My expert command of JavaScript allows me to create complex apps with a focus on performance and quality.',
    projects: [projects.reactroutine, projects.reduxrender]
  },
  {
    title: 'Interactive & UX',
    color: colors.orange,
    names: [
      'Firebase realtime apps',
      'WebGL / HTML5 games',
      'Interface design'
    ],
    description:
      'Realtime applications and games offer challenges at the intersection of performance and design. I strive to meet both challenges without compromise.',
    projects: [projects.aleamancer]
  },
  {
    title: 'Full Stack',
    color: colors.green,
    names: ['Progressive Web Apps', 'Performance auditing', 'Optimization'],
    description:
      'When you want to make an impression, milliseconds matter. Ensuring the best possible performance on a budget requires thorough knowledge of the entire web stack.',
    projects: [projects.jsonnull]
  },
  {
    title: 'Exploration',
    color: colors.red,
    names: ['Rust', 'PureScript', 'New technologies'],
    description:
      "I love diving into cutting-edge technologies on the web. Today's dreams can be tomorrow's reality.",
    projects: [projects.wasmrust, projects.valor]
  }
]

const Top = styled.div`
  ${media.tablet`
    width: 50%;
    margin-left: 50%;
  `};
`

const interestsMixin = css`background: ${colors.veryLightGray};`

const Capabilities = () => {
  return (
    <Section mixin={interestsMixin}>
      <Top>
        <Heading>Here's what I'm all about</Heading>
        <Paragraph>
          I work with clients on a variety of current and emerging platforms.
          Maintaining a diverse skillset lets me adapt to meet their changing
          needs. Here are the areas I readily turn into client wins.
        </Paragraph>
      </Top>
      {capes.map((details, i) => {
        return <Area key={details.title} {...details} first={i === 0} />
      })}
    </Section>
  )
}

export default Capabilities
