// @flow
import React from 'react'
import Wrapper from '../../../components/Wrapper'
import Links from '../../../components/navigation/Links'
import Title from '../../../components/navigation/Title'
import Footer from '../../../components/navigation/Footer'
import About from '../../../components/about'
import styled from 'styled-components'
import type { RenderProps } from '../../types'

const Template = (props: RenderProps) => {
  return (
    <Wrapper>
      <About />

      <Footer />

      <Title />
      <Links />
    </Wrapper>
  )
}

export default Template
