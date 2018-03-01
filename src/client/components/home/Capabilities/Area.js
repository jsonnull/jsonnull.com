/* @flow */
import * as React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from '../../../styles/base'
import Featured from './Project'
import Paragraph from './Paragraph'
import type { Project } from '../../../types'

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 4.8rem;
  width: 100%;

  ${media.tablet`
    margin-top: 7.2rem;
  `};
  ${media.tablet`
    flex-direction: row;
  `};
`

const Left = styled.div`
  ${media.tablet`
    width: 50%;
    padding-right: 4.8rem;
  `};
`

const Right = styled.div`
  ${media.tablet`
    width: 50%;
  `};
`

const Name = styled.h3`
  line-height: ${lineUnit};
  font-size: ${fontSize.medium};
  font-weight: 700;
  color: ${props => props.color};
  margin-bottom: 1em;
`

const Description = styled.ul`
  margin-top 1em;
  font-size: ${fontSize.normal};
  line-height: 2;
  margin-bottom: 1em;
`

const Item = styled.li`
  color: ${colors.darkGray};
  position: relative;
  padding-left: 1.8rem;

  &:before {
    width: 6px;
    height: 6px;
    background-color: ${props => props.bullet};
    border-radius: 50%;
    position: absolute;
    content: '';
    display: block;
    left: 0;
    top: 13px;
  }
`

const Open = styled.div`
  padding-left: 1.2rem;
  font-size: ${fontSize.small};
  color: ${colors.gray};
`

type Props = {
  title: string,
  color?: string,
  description?: string,
  names?: Array<string>,
  projects?: Array<Project>,
  first?: boolean
}
const Area = (props: Area) => {
  const {
    title,
    names = [],
    color = colors.black,
    projects = [],
    first = false
  } = props

  return (
    <Container>
      <Left>
        {projects.map(project => <Featured key={project.title} {...project} />)}
        {first && (
          <Open>
            I love consuming and contributing to open source. These projects
            help me hone my skills and explore new ideas.
          </Open>
        )}
      </Left>
      <Right>
        <Name color={color}>{title}</Name>
        {props.description && <Paragraph>{props.description}</Paragraph>}
        <Description>
          {names.map(text => (
            <Item key={text} bullet={color}>
              {text}
            </Item>
          ))}
        </Description>
      </Right>
    </Container>
  )
}

export default Area
