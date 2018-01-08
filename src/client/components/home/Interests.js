/* @flow */
import * as React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from '../../styles/base'
import Paragraph from './shared/Paragraph'
import Heading from '../Heading'
import Section from '../Section'

const borderColor = colors.lightGray

const SectionHeading = Heading.withComponent('h3').extend`
  color: ${colors.darkGray};
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 2;
`

const ListItem = styled.li`
  margin-bottom: 2.4rem;
  padding: 0 1.2rem;
  position: relative;
  right: 1.2rem;
  width: 100%;

  ${media.mobile`
    width: 50%;
  `};

  ${media.tablet`
    width: 25%;
  `};

  ${media.desktop`
    width: 50%;
  `};

  ${media.desktopLarge`
    width: 25%;
  `};
`

const Name = styled.h3`
  line-height: ${lineUnit};
  font-size: ${fontSize.tiny};
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.color};
  margin-bottom: 1em;

  ${media.mobile`
    font-size: ${fontSize.small};
  `};
`

const Description = styled.ul`
  margin: 0;
  font-size: ${fontSize.small};
  li {
    list-style-type: circle;
  }
`

type InterestProps = {
  title: string,
  children?: Array<string>,
  color?: string
}
const Interest = (props: InterestProps) => {
  const { title, children = [], color = colors.black } = props

  return (
    <ListItem>
      <Name color={color}>{title}</Name>
      <Description>
        {children.map(text => <li key={text}>{text}</li>)}
      </Description>
    </ListItem>
  )
}

const Inner = styled.div``

const interestsMixin = css`background: ${colors.veryLightGray};`

const InterestsSection = () => {
  return (
    <Section mixin={interestsMixin}>
      <Inner>
        <SectionHeading>Experience and skills</SectionHeading>
        <Paragraph>
          Maintaining a diverse skillset is key to staying adaptable. I work
          with clients on a variety of platforms. In my free time I dive into
          cutting-edge technologies. Here are the areas I readily turn into
          client wins.
        </Paragraph>
      </Inner>
      <List>
        <Interest color={colors.blue} title="JavaScript">
          {['React & Redux', 'Flow', 'Webpack', 'ES6+']}
        </Interest>
        <Interest color={colors.orange} title="Interactive & UX">
          {[
            'Firebase realtime apps',
            'WebGL / HTML5 games',
            'Interface design'
          ]}
        </Interest>
        <Interest color={colors.green} title="Full Stack">
          {['Progressive Web Apps', 'Performance auditing', 'Optimization']}
        </Interest>
        <Interest color={colors.red} title="Exploration">
          {['Rust', 'PureScript', 'New technologies']}
        </Interest>
      </List>
    </Section>
  )
}

export default InterestsSection
