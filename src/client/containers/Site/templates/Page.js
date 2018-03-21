// @flow
import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import Wrapper from '../../../components/Wrapper'
import Section from '../../../components/Section'
import Content from '../../../components/Content'
import Title from '../../../components/navigation/Title'
import Links from '../../../components/navigation/Links'
import Footer from '../../../components/navigation/Footer'
import { asyncComponent } from 'react-async-component'
import type { RenderProps } from '../../../types'

type Props = {
  match: Object,
  location: Object
} & RenderProps

const Page = (props: Props) => {
  let pathname = props.location.pathname
  if (pathname.indexOf('.html') == -1) {
    pathname = pathname + 'index.html'
  }

  pathname = pathname.replace('.html', '.md')

  const Body = asyncComponent({
    resolve: () =>
      new Promise(async (resolve, reject) => {
        const {
          content,
          data
        } = await import(`../../../../../content${pathname}`)

        const component = () => (
          <Section>
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

export default withRouter(Page)
