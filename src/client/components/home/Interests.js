/* @flow */
import * as React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from 'styles/base'
import Section from 'components/Section'

const borderColor = colors.lightGray

const Heading = styled.h3`
  font-family: ${fonts.heading};
  font-size: ${fontSize.large};
  font-weight: 700;
  color: ${colors.black};
  margin: 0 0 1em;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: ${lineUnit};
  ${media.desktop`
    width: 50%;
  `};
`

const ListItem = styled.li`
  float: left;
  margin-bottom: 2.4rem;
  padding: 0 1.2rem;
  border-left: 1px solid ${borderColor};
  width: 50%;
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
  margin-left: 1.2rem;
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

const Inner = styled.div`
  display: flex;
  flex-direction: column;

  ${media.desktop`
    flex-direction: row;
  `};
`

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 2em;
  font-size: ${fontSize.small};
  font-family: ${fonts.content};
  line-height: 2;
  ${media.tablet`
    width: 75%;
    font-size: ${fontSize.normal};
  `};
  ${media.desktop`
    width: 50%;
    padding-right: 2.4rem;
  `};
`

const interestsMixin = css`background: ${colors.veryLightGray};`

const InterestsSection = () => {
  return (
    <Section mixin={interestsMixin}>
      <Heading>Experience and skills</Heading>
      <Inner>
        <Paragraph>
          Maintaining a diverse skillset is key to staying adaptable. I've
          worked with clients on a variety of platforms, and in my free time I
          dive into cutting-edge technologies to see what's good. Here are the
          areas I readily turn into client wins.
        </Paragraph>
        <List>
          <Interest color={colors.blue} title="JavaScript">
            {['React & Redux', 'Flow', 'Webpack', 'ES6+']}
          </Interest>
          <Interest color={colors.orange} title="Interactive & UX">
            {[
              'Firebase realtime apps',
              'WebGL and HTML5 games',
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
      </Inner>
    </Section>
  )
}

export default InterestsSection
