import React from 'react'
import styled from '@emotion/styled'
import feather from 'feather-icons'
import { colors, lineUnit } from '../../../styles/base'
import { noUnderline } from '../../../styles/links'

const SocialLink = styled.a`
  margin-right: 2.4rem;

  opacity: 0.4;

  &:link,
  &:visited,
  &:hover,
  &:active {
    ${noUnderline};
    transition: opacity 200ms;
  }
  &:hover {
    opacity: 1;
  }
`

const IconWrapper = styled.div`
  height: ${lineUnit};
  line-height: ${lineUnit};
  margin-top: 1.2rem;
  padding-top: 2px;
  display: inline;
`

const Icon = ({ name, href }) => (
  <SocialLink href={href} target="_blank" rel="noopener noreferrer">
    <IconWrapper
      dangerouslySetInnerHTML={{
        __html: feather.icons[name].toSvg({
          color: colors.gray900,
          width: 20,
          height: 20
        })
      }}
    />
  </SocialLink>
)

export default Icon
