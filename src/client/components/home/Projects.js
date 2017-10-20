/* @flow */
import * as React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from 'styles/base'

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
  line-height: ${lineUnit};
  margin: 0;
  margin-right: 1rem;
  font-size: ${fontSize.tiny};
  color: ${colors.gray};
  text-transform: uppercase;
  &:before {
    content: '#';
    color: ${colors.lightGray};
  }
`

const Project = styled.div`
  padding: 0 0 0 1.2rem;
  border-left: 1px solid ${borderColor};
  margin-bottom: 2.4rem;
  margin-right: 1.2rem;
  flex: 1;
`

const Name = styled.h4`
  margin: 0;
  font-size: ${fontSize.small};
  font-weight: 700;
  color: ${colors.darkGray};

  ${media.mobile`
    color: ${props => props.color};
    font-size: ${fontSize.normal};
  `};
`

const Link = styled.a`
  padding-right: 1rem;
  font-size: ${fontSize.small};
  color: ${colors.gray};
  display: block;
`

const Description = styled.div`
  margin: 0 0 1.2rem;
  font-size: ${fontSize.small};
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
      <Description>{children}</Description>
      {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      {/*
    <Link href={url}>{ address }</Link>
    */}
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
  line-height: ${lineUnit};
  width: 100%;
  ${media.tablet`
    width: 75%;
    font-size: ${fontSize.normal};
  `};
  ${media.desktop`
    width: 33%;
    padding-right: 2.4rem;
  `};
`

const Projects = styled.div`
  width: 100%;

  ${media.desktop`
    width: 66%;
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
