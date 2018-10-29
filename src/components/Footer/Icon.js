// @flow
import React from 'react'
import styled from 'styled-components'
import feather from 'feather-icons'

const Social = styled.div`
  margin-top: auto;
`

const SocialLink = styled.a`
  background: none !important;
`

const IconWrapper = styled.div`
  height: ${lineUnit};
  line-height: ${lineUnit};
  margin-top: 1.2rem;
  padding-top: 2px;
  display: none;

  ${media.desktop`
    display: block;
  `};
`

type IconProps = {
  name: string,
  href: string
}
const Icon = ({ name, href }: IconProps) => (
  <SocialLink href={href} target="_blank" rel="noopener">
    <IconWrapper
      dangerouslySetInnerHTML={{
        __html: feather.icons[name].toSvg({
          color: colors.gray,
          width: 20,
          height: 20
        })
      }}
    />
  </SocialLink>
)

export default Icon
