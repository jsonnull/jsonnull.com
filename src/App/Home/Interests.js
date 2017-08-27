/* @flow */
import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, lineUnit } from 'styles/base'
import Overlay from 'App/components/Overlay'
import mouseOver from 'App/containers/mouseOver'

const borderColor = colors.lightGray

const List = styled.ul`
  margin-top: ${lineUnit};
  display: flex;
  line-height: ${lineUnit};

`
const ListItem = styled.li`
  margin-right: 1.2rem;
  flex: 1;
  padding: 0 0 0 1.2rem;
  border-left: 1px solid ${borderColor};
`

const Name = styled.h3`
  font-weight: 700;
  font-size: ${fontSize.normal};
  line-height: ${lineUnit};
  color: ${props => props.color};
`

const Description = styled.p`
  margin: 0;
  font-size: ${fontSize.small};
`

const Interest = (props) => {
  const { title, children = null, color = colors.black } = props

  return (
    <ListItem>
      <Name color={color}>{ title }</Name>
      <Description>{ children }</Description>
    </ListItem>
  )
}

const Interests = styled.div`
  margin-bottom: 14.4rem;
  padding: 14.4rem 0;
  background-color: ${colors.veryLightGray};
  position: relative;
`

const Inner = styled.div`
  width: 1000px;
  margin 0 auto;
  position: relative;
`

const Heading = styled.h3`
  font-family: ${fonts.heading};
  font-size: ${fontSize.large};
  font-weight: 700;
  color: ${colors.black};
  margin: 0;
`

const Paragraph = styled.p`
  width: 750px;
  margin: 3.6rem 0;
  font-size: ${fontSize.normal};
  line-height: 3rem;
`

const InterestsSection = props => (
  <Interests
    onMouseEnter={props.onMouseEnter}
    onMouseOver={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
    onMouseOut={props.onMouseLeave}
  >
    <Inner>
      <Heading>
        Experience and skills for today's web.
      </Heading>
      <Paragraph>
        Having a diverse and always-growing skillset is key to staying adaptable.
        I've worked with clients on a variety of platforms, and in my free time I dive into cutting-edge technologies to see what's good.
        Here are the areas I readily turn into client wins.
      </Paragraph>
      <List>
        <Interest color={colors.blue} title='JavaScript'>
          Web projects using modern JavaScript, particularly React, Flow, and TypeScript
        </Interest>
        <Interest color={colors.orange} title='Firebase'>
          Realtime web apps backed by Firebase
        </Interest>
        <Interest color={colors.green} title='Progressive Web Apps'>
          <a href="https://developers.google.com/web/progressive-web-apps/">PWAs are</a>
          {' crazy fast, offline-first web apps'}
        </Interest>
      </List>
      <List>
        <Interest color={colors.gray} title='Performance'>
          Sites facing performance challenges of any kind
        </Interest>
        <Interest color={colors.red} title='Interactive'>
          Browser games are an interesting blend of UX and performance concerns
        </Interest>
        <Interest color={colors.gray} title='New Languages'>
          Any project using Rust, PureScript, Haskell
        </Interest>
      </List>
    </Inner>
    <Overlay background={colors.veryLightGray} isMouseOver={props.isMouseOver} />
  </Interests>
)

export default mouseOver(InterestsSection)
