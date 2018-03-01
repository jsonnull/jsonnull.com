// @flow
import styled from 'styled-components'
import { fontSize, media } from '../../../styles/base'

const Paragraph = styled.p`
  margin: 0;
  font-size: ${fontSize.normal};
  line-height: 2;
  ${media.tablet`
    font-size: ${fontSize.normal};
  `};
`

export default Paragraph
