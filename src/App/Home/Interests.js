/* @flow */
import React from 'react'
import styled from 'styled-components'
import * as style from 'styles/base'

const borderColor = style.lightGray

const List = styled.ul`
  margin-top: ${style.lineUnit};
  display: flex;
  line-height: ${style.lineUnit};

`
const ListItem = styled.li`
  margin-right: 1.2rem;
  flex: 1;
  padding: 0 0 0 1.2rem;
  border-left: 1px solid ${borderColor};
`

const Name = styled.h3`
  font-weight: 700;
  font-size: ${style.fontSize};
  line-height: ${style.lineUnit};
  color: ${props => props.color};
`

const Description = styled.p`
  margin: 0;
  font-size: ${style.fontSizeSmall};
`

const Interest = (props) => {
  const { title, children = null, color = style.black } = props

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
  background-color: ${style.veryLightGray};
`

const Inner = styled.div`
  width: 1000px;
  margin 0 auto;
  position: relative;
`

const Title = styled.h3`
  font-family: ${style.heading};
  font-size: ${style.fontSizeLarge};
  font-weight: 700;
  color: ${style.black};
  margin: 0;
`

const Paragraph = styled.p`
  width: 750px;
  margin: 3.6rem 0;
  font-size: ${style.fontSize};
  line-height: 3rem;
`

const InterestsSection = props => (
  <Interests>
    <Inner>
      <Title>
        Experience and skills for today's web.
      </Title>
      <Paragraph>
        Having a diverse and always-growing skillset is key to staying adaptable.
        I've worked with clients on a variety of platforms, and in my free time I dive into cutting-edge technologies to see what's good.
        Here are the areas I readily turn into client wins.
      </Paragraph>
      <List>
        <Interest color={style.blue} title='JavaScript'>
          Web projects using modern JavaScript, particularly React, Flow, and TypeScript
        </Interest>
        <Interest color={style.orange} title='Firebase'>
          Realtime web apps backed by Firebase
        </Interest>
        <Interest color={style.green} title='Progressive Web Apps'>
          <a href="https://developers.google.com/web/progressive-web-apps/">PWAs are</a>
          {' crazy fast, offline-first web apps'}
        </Interest>
      </List>
      <List>
        <Interest color={style.gray} title='Performance'>
          Sites facing performance challenges of any kind
        </Interest>
        <Interest color={style.red} title='Interactive'>
          Browser games are an interesting blend of UX and performance concerns
        </Interest>
        <Interest color={style.gray} title='New Languages'>
          Any project using Rust, PureScript, Haskell
        </Interest>
      </List>
    </Inner>
  </Interests>
)

export default InterestsSection
