/* @flow */
import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from 'styles/base'

const borderColor = colors.lightGray

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: ${lineUnit};

  ${media.desktop`
    margin-top: ${lineUnit};
  `}
`

const ListItem = styled.li`
  float: left;
  margin-bottom: 2.4rem;
  padding: 0 1.2rem;
  border-left: 1px solid ${borderColor};
  width: 50%;
  ${media.desktop`
    width: 33%;
  `}
`

const Name = styled.h3`
  line-height: ${lineUnit};
  font-size: ${fontSize.tiny};
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.color};

  ${media.mobile`
    font-size: ${fontSize.small};
  `}
`

const Description = styled.p`
  margin: 0;
  font-size: ${fontSize.small};
  ${media.mobile`
  `}
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
  padding: 7.2rem 2.4rem;
  background-color: ${colors.veryLightGray};
  position: relative;

  ${media.mobile`
    padding: 7.2rem 4.8rem;
  `}
  ${media.tablet`
    padding: 14.4rem 4.8rem;
  `}
`

const Inner = styled.div`
  position: relative;
  margin: 0 auto;

  ${media.tablet`
    width: 700px;
  `}
  ${media.desktopHuge`
    width: 1000px;
  `}
`

const Heading = styled.h3`
  font-family: ${fonts.heading};
  font-size: ${fontSize.normal};
  font-weight: 700;
  color: ${colors.black};
  margin: 0;

  ${media.mobile`
    font-size: ${fontSize.large};
  `}
`

const Paragraph = styled.p`
  margin: 3.6rem 0;
  font-size: ${fontSize.small};
  line-height: ${lineUnit};
  ${media.tablet`
    font-size: ${fontSize.normal};
    line-height: 3rem;
    width: 75%;
  `}
`

class InterestsSection extends React.Component {
  render () {
    return (
      <Interests>
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
      </Interests>
    )
  }
}

export default InterestsSection
