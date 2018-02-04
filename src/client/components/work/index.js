// @flow
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
import Heading from '../Heading'
import { featured } from '../../projects'

const borderColor = colors.lightGray

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
  flex-direction: column;
`

const Project = styled.div`
  padding: 0 1.2rem 0 1.2rem;
  border-left: 1px solid ${borderColor};
  margin-bottom: 2em;
  position: relative;
  right: 1.2rem;
  width: 100%;
  line-height: 2;
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
  github: string,
  description: string,
  tags: Array<string>,
  color?: string
}
const Tile = (props: TileProps) => {
  const { title, github, description, tags, color = colors.black } = props

  const url = props.url || props.github

  return (
    <Project>
      <Name color={color} url={url} title={title} />
      <Description>
        {description}{' '}
        <Github href={github} target="_blank" rel="noopener">
          GitHub&nbsp;→
        </Github>
      </Description>
      {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </Project>
  )
}

const Recent = () => (
  <Projects>
    {featured.map(project => <Tile key={project.title} {...project} />)}
  </Projects>
)

export default Recent
