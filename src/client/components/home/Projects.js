/* @flow */
import * as React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from 'styles/base'
import { background, color, underlineIn, underlineOut } from 'styles/links'

const borderColor = colors.lightGray

const Inner = styled.div`
  position: relative;
  padding: 7.2rem 0;
  ${media.mobile`
    padding: 7.2rem 0;
  `};
  ${media.tablet`
    padding: 14.4rem 0;
    margin: 0 auto;
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

const Tag = styled.span`
  margin: 0;
  margin-right: 0.5em;
  font-size: ${fontSize.tiny};
  color: ${colors.darkGray};
  border: 1px solid ${colors.lightGray};
  padding: 0.25em 0.5em;
  border-radius: 5px;
  &:before {
    content: '#';
    color: ${colors.gray};
  }
`

const Project = styled.div`
  padding: 0 0 0 1.2rem;
  border-left: 1px solid ${borderColor};
  margin-bottom: 2em;
  flex: 1;
`

const Name = styled.h4`
  margin: 0;
  font-size: ${fontSize.small};
  font-weight: 700;
  color: ${props => props.color};

  ${media.mobile`
    font-size: ${fontSize.normal};
  `};
`

const Link = styled.a`
  font-size: ${fontSize.small};
  display: inline-block;
  margin-bottom: 1em;

  &:link,
  &:visited,
  &:hover,
  &:active {
    ${color(colors.gray)} ${background(colors.white)} ${underlineOut};
    background-position: 0 18px;
  }

  &:hover {
    ${underlineIn};
  }
`

const Description = styled.div`
  margin: 0 0 1em;
  font-size: ${fontSize.small};
  ${media.tablet`
    font-size: ${fontSize.normal};
  `};
`

type TileProps = {
  title: string,
  url?: string,
  address?: string,
  children?: React.ChildrenArray<*>,
  tags: Array<string>,
  color?: string
}
const Tile = (props: TileProps) => {
  const { title, url, address, children, tags, color = colors.black } = props

  return (
    <Project>
      <Name color={color}>{title}</Name>
      <Link href={url} target="_blank" rel="noopener">
        {address}
      </Link>
      <Description>{children}</Description>
      {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </Project>
  )
}

const Recent = styled.div`
  position: relative;
  padding: 0 2.4rem;
  ${media.mobile`
    padding: 0 4.8rem;
  `};
`

const Title = styled.h3`
  font-family: ${fonts.heading};
  font-size: ${fontSize.large};
  font-weight: 700;
  color: ${colors.gray};
  margin: 0;
  margin-bottom: 1em;
`

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 2em;
  font-size: ${fontSize.small};
  width: 100%;
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

const Projects = styled.div`
  width: 100%;

  ${media.desktop`
    width: 50%;
  `};
`

const ProjectSection = () => (
  <Recent>
    <Inner>
      <Title>I {'<3'} open source</Title>
      <Section>
        <Paragraph>
          I love consuming and contributing to open source. Side projects are a
          regular opportunity to learn and try new things. Here are some I've
          been involved with recently.
        </Paragraph>
        <Projects>
          <Tile
            title="Aleamancer"
            url="https://www.aleamancer.com"
            address="www.aleamancer.com"
            tags={['Design', 'Development', 'JavaScript', 'Open Source']}
            color={colors.red}
          >
            A groundbreaking online tabletop role-playing platform, built with
            cutting-edge tools and tech from the React+Redux ecosystem.
          </Tile>
          <Tile
            title="Redux Render"
            url="https://github.com/jsonnull/redux-render"
            address="github.com/jsonnull/redux-render"
            tags={['Development', 'JavaScript', 'Open Source']}
            color={colors.blue}
          >
            Ergonomic React bindings for Redux using the render prop pattern.
          </Tile>
          <Tile
            title="jsonnull"
            url="https://github.com/jsonnull/jsonnull.com"
            address="github.com/jsonnull/jsonnull.com"
            tags={['Design', 'Development', 'JavaScript']}
            color={colors.orange}
          >
            The content and build system for this site, a statically rendered
            React application.
          </Tile>
        </Projects>
      </Section>
    </Inner>
  </Recent>
)

export default ProjectSection
