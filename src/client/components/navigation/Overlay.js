import React from 'react'
import Title from 'components/navigation/Title'
import Links from 'components/navigation/Links'
import styled from 'styled-components'
import { media } from 'styles/base'

const Overlay = styled.div`
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${media.desktop`
    left: auto;
    right: auto;
    display: block;
    width: 200px;
  `} @media screen and (-webkit-min-device-pixel-ratio: 0) {
    clip: auto;
    -webkit-mask-image: -webkit-linear-gradient(top, #ffffff 0%, #ffffff 100%);
  }
`

const LeftOverlay = Overlay.extend`
  width: 170px;
  right: auto;
  ${media.desktop`
    left: 0;
  `};
`

const RightOverlay = Overlay.extend`
  left: 170px;
  ${media.desktop`
    left: auto;
    right: 0;
  `};
`

const FullOverlay = props => {
  const { background, zOffset = 0 } = props

  return (
    <div>
      <LeftOverlay>
        <Title background={background} zOffset={zOffset} />
      </LeftOverlay>
      <RightOverlay>
        <Links background={background} zOffset={zOffset} />
      </RightOverlay>
    </div>
  )
}

export default FullOverlay
