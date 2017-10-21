/* @flow */
import * as React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from 'styles/base'

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
  color: ${colors.darkGray};
  li {
    list-style-type: circle;
  }
`

type InterestProps = {
  title: string,
  children?: React.ChildrenArray<*>,
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

const Interests = styled.div`
  padding: 7.2rem 2.4rem;
  background-color: ${colors.veryLightGray};
  position: relative;

  ${media.mobile`
    padding: 7.2rem 4.8rem;
  `} ${media.tablet`
    padding: 14.4rem 4.8rem;
  `};
`

const Inner = styled.div`
  position: relative;
  margin: 0 auto;

  ${media.tablet`
    width: 700px;
  `};
  ${media.desktopHuge`
    width: 1000px;
  `};
`

const Section = styled.div`
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

const InterestsSection = () => {
  return (
    <Interests>
      <Inner>
        <Heading>Experience and skills</Heading>
        <Section>
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
        </Section>
      </Inner>
    </Interests>
  )
}

export default InterestsSection
