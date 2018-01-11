/* @flow */
import * as React from 'react'
import styled from 'styled-components'
import feather from 'feather-icons'
import { colors, fonts, fontSize, lineUnit, media } from '../../styles/base'
import {
  background,
  color,
  underlineIn,
  underlineOut
} from '../../styles/links'
import Paragraph from './shared/Paragraph'
import Heading from '../Heading'
import Section from '../Section'

const borderColor = colors.lightGray

const SectionHeading = Heading.withComponent('h3').extend`
  color: ${colors.gray};
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

const Projects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Project = styled.div`
  padding: 0 0 0 1.2rem;
  border-left: 1px solid ${borderColor};
  margin-bottom: 2em;
  position: relative;
  right: 1.2rem;
  width: 100%;
  line-height: 2;
  ${media.desktop`
    width: 50%;
  `};
`

const Name = props => {
  const { title, color, url } = props
  return (
    <Link href={url} target="_blank" rel="noopener">
      <ProjectTitle color={color} href={url}>
        {title}
      </ProjectTitle>
    </Link>
  )
}

const ProjectTitle = styled.h4`
  margin: 0;
  font-size: ${fontSize.small};
  font-weight: 700;
  color: ${props => props.color};
  display: inline-block;

  ${media.mobile`
    font-size: ${fontSize.normal};
  `};
`

const Link = styled.a`
  &:link,
  &:visited,
  &:hover,
  &:active {
    ${underlineOut};
  }
`

const External = () => {
  return (
    <span
      style={{
        position: 'relative',
        top: '3px'
      }}
      dangerouslySetInnerHTML={{
        __html: feather.icons['arrow-right'].toSvg({
          color: colors.gray,
          width: 17,
          height: 17
        })
      }}
    />
  )
}

const Github = styled.a`
  font-size: ${fontSize.small};

  &,
  &:link,
  &:visited,
  &:hover,
  &:active {
    ${color(colors.gray)};
    ${background(colors.white)};
    ${underlineOut};
    transition: background-size 100ms ease;
  }

  &:hover {
    ${underlineIn};
  }
`

const Description = styled.div`
  font-size: ${fontSize.small};
  margin-bottom: 0.5em;
`

type TileProps = {
  title: string,
  url?: string,
  github?: string,
  children?: React.ChildrenArray<*>,
  tags: Array<string>,
  color?: string
}
const Tile = (props: TileProps) => {
  const { title, url, children, tags, color = colors.black } = props

  const github = props.github || props.url

  return (
    <Project>
      <Name color={color} url={url} title={title} />
      <Description>
        {children}{' '}
        <Github href={github} target="_blank" rel="noopener">
          GitHub&nbsp;→
        </Github>
      </Description>
      {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </Project>
  )
}

const Recent = () => (
  <Section>
    <SectionHeading>I {'<3'} open source</SectionHeading>
    <Paragraph>
      I love consuming and contributing to open source. Side projects are a
      regular opportunity to learn and try new things. Here are some I've been
      involved with recently.
    </Paragraph>
    <Projects>
      <Tile
        title="Aleamancer"
        url="https://www.aleamancer.com"
        github="https://github.com/jsonnull/aleamancer"
        tags={['Design', 'Dev', 'JavaScript']}
        color={colors.red}
      >
        A groundbreaking online tabletop role-playing platform, built with
        cutting-edge tools and tech from the React+Redux ecosystem.
      </Tile>
      <Tile
        title="WebAssembly Rust Utils"
        url="https://github.com/jsonnull/wasm-rust-utils"
        tags={['Dev', 'Rust', 'JavaScript']}
        color={colors.gray}
      >
        📦 A Rust and JavaScript utility suite for writing WebAssembly modules.
      </Tile>
      <Tile
        title="Redux Render"
        url="https://github.com/jsonnull/redux-render"
        tags={['Dev', 'JavaScript']}
        color={colors.blue}
      >
        📦 Ergonomic React bindings for Redux using the render prop pattern.
      </Tile>
      <Tile
        title="jsonnull"
        url="https://github.com/jsonnull/jsonnull.com"
        tags={['Design', 'Dev', 'JavaScript']}
        color={colors.orange}
      >
        The content and build system for this site, a statically rendered React
        application.
      </Tile>
    </Projects>
  </Section>
)

export default Recent
