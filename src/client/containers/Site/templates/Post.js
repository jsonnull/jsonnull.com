// @flow
import React from 'react'
import styled from 'styled-components'
import Wrapper from '../../../components/Wrapper'
import Heading from '../../../components/Heading'
import Section from '../../../components/Section'
import Content from '../../../components/Content'
import Title from '../../../components/navigation/Title'
import Links from '../../../components/navigation/Links'
import Footer from '../../../components/navigation/Footer'
import { asyncComponent } from 'react-async-component'
import type { RenderProps } from '../../../types'

type Props = {
  match: Object
} & RenderProps

const Post = (props: Props) => {
  const { year, month, title } = props.match.params

  const Body = asyncComponent({
    resolve: () =>
      new Promise(async (resolve, reject) => {
        const {
          content,
          data
        } = await import(`../../../../../content/blog/${year}/${month}/${title}.md`)

        const component = () => (
          <Section>
            <Heading>{data.title}</Heading>
            <Content content={content} />
          </Section>
        )

        resolve(component)
      })
  })

  return (
    <Wrapper>
      <Body />
      <Title />
      <Links />
      <Footer />
    </Wrapper>
  )
}

export default Post
