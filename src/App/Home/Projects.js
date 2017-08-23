/* @flow */
import React from 'react'
import styled from 'styled-components'
import * as style from 'styles/base'

const borderColor = style.lightGray

const Tag = styled.span`
  line-height: ${style.lineUnit};
  margin: 0;
  margin-right: 1rem;
  font-style: italic;
  font-size: ${style.fontSizeSmall};
  color: ${style.gray};
`

const Project = styled.div`
  padding: 0 0 0 1.2rem;
  border-left: 1px solid ${borderColor};
  margin-bottom: 2.4rem;
`

const Name = styled.h4`
  margin: 0;
  font-size: ${style.fontSize};
  font-weight: 700;
  color: ${props => props.color};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Link = styled.a`
  padding-right: 1rem;
  margin-right: auto;
  font-size: ${style.fontSizeSmall};
`

const Description = styled.div`
  margin: 2.4rem 0 0;
  font-size: ${style.fontSizeSmall};
`

const Tile = (props) => {
  const { title, url, address, children, tags, color = style.black } = props

  return <Project>
    <Name color={color}>{ title }</Name>
    <Row>
      <Link href={url}>{ address }</Link>
      { tags.map(tag => <Tag>{ tag }</Tag>) }
    </Row>
    <Description>{ children }</Description>
  </Project>
}

const Recent = styled.div`
  width: 75%;
  margin-bottom: 14.4rem;
`

const Title = styled.h3`
  font-family: ${style.heading};
  font-size: ${style.fontSizeLarge};
  font-weight: 700;
  color: ${style.gray};
  margin: 0;
`

const Paragraph = styled.p`
  width: 750px;
  margin: 3.6rem 0;
  font-size: ${style.fontSize};
  line-height: 3rem;
`

const Projects = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectSection = props => (
  <Recent>
    <Title>I { '<3' } open source.</Title>
    <Paragraph>
      I love consuming and contributing to open source.
      Side projects are a regular opportunity to learn and try new things.
      Here are some I've been involved with recently.
    </Paragraph>
    <Projects>
      <Tile title="Aleamancer"
        url="https://www.aleamancer.com"
        address="www.aleamancer.com"
        tags={["Design", "Development", "JavaScript", "Open Source"]}
        color={ style.red }
      >
        A groundbreaking online tabletop role-playing platform,
        built with cutting-edge tools and tech from the React+Redux ecosystem.
      </Tile>
      <Tile title="jsonnull"
        url="https://github.com/jsonnull/jsonnull.com"
        address="github.com/jsonnull/jsonnull.com"
        tags={["Design", "Development", "JavaScript"]}
        color={ style.orange }
      >
        The content and build system for this site, a statically rendered React application.
      </Tile>
    </Projects>
  </Recent>
)

export default ProjectSection