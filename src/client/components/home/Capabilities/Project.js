/* @flow */
import * as React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from '../../../styles/base'
import { underlineOut } from '../../../styles/links'

const Container = styled.a`
  padding: 1.2rem;
  background: ${colors.white};
  margin-bottom: 1.2rem;
  position: relative;
  width: 100%;
  display: block;

  &:link,
  &:visited,
  &:hover,
  &:active {
    ${underlineOut};
  }
`

const Title = styled.h4`
  margin: 0;
  font-size: ${fontSize.small};
  line-height: 2.2rem;
  font-weight: 500;
  color: ${colors.gray};
  display: inline-block;

  ${media.mobile`
    font-size: ${fontSize.small};
  `};
`

const Description = styled.div`
  font-size: ${fontSize.small};
  color: ${colors.darkGray};
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

type Props = {
  title: string,
  url?: string,
  github: string,
  description: string,
  tags: Array<string>,
  color?: string
}
const Project = (props: Props) => {
  const { title, github, description, tags } = props

  return (
    <Container href={github} target="_blank" rel="noopener">
      <Title>{title}</Title>
      <Description>{description}</Description>
      {/*tags.map(tag => <Tag key={tag}>{tag}</Tag>)*/}
    </Container>
  )
}

export default Project
