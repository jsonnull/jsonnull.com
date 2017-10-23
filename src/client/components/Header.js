// @flow
import React from 'react'
import styled from 'styled-components'
import { fonts } from 'styles/base'

const Title = styled.h1`
  font-family: ${fonts.heading};
  font-weight: 700;
`

type Props = {
  title: string
}

const Header = (props: Props) => <Title>{props.title}</Title>

export default Header
