// @flow
import styled from 'styled-components'
import { fontSize, media } from '../../../styles/base'

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 2em;
  font-size: ${fontSize.small};
  line-height: 2;
  ${media.tablet`
    width: 75%;
    font-size: ${fontSize.normal};
  `};
  ${media.desktopLarge`
    width: 50%;
  `};
`

export default Paragraph
