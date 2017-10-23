// @flow
import React from 'react'
import styled from 'styled-components'
import { media } from 'styles/base'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 7.2rem;
  left: 0;
  right: 0;

  ${media.mobile`
    top: 12rem;
  `};
  ${media.desktop`
    top: 0;
  `};
`

export default Wrapper
