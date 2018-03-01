// @flow
import styled from 'styled-components'
import { fonts, fontSize, colors } from '../styles/base'

const Heading = styled.h1`
  font-family: ${fonts.heading};
  font-size: ${fontSize.medium};
  font-weight: 700;
  color: ${colors.black};
  margin: 0 0 1em;
`

export default Heading
