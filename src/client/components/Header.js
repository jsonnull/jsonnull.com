// @flow
import React from 'react'
import styled from 'styled-components'
import { fonts } from 'styles/base'
import Heading from 'components/Heading'

type Props = {
  title: string
}

const Header = (props: Props) => <Heading>{props.title}</Heading>

export default Header
