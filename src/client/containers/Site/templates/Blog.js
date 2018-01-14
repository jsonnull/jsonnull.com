// @flow
import React from 'react'
import Wrapper from '../../../components/Wrapper'
import Links from '../../../components/navigation/Links'
import Title from '../../../components/navigation/Title'
import Footer from '../../../components/navigation/Footer'
import Header from '../../../components/Header'
import Section from '../../../components/Section'
import BlogIndex from '../BlogIndex'
import styled from 'styled-components'
import type { RenderProps } from '../../types'

const Blog = (props: RenderProps) => (
  <Wrapper>
    <Section>
      <Header title="Blog posts" />

      {/*<BlogIndex {...props} />*/}
    </Section>

    <Footer />

    <Title />
    <Links />
  </Wrapper>
)

export default Blog
