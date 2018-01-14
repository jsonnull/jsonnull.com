// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '../../../components/Wrapper'
import Links from '../../../components/navigation/Links'
import Title from '../../../components/navigation/Title'
import Footer from '../../../components/navigation/Footer'
import Header from '../../../components/Header'
import Section from '../../../components/Section'
import type { RenderProps } from '../../types'

type Props = {
  match: Object
} & RenderProps

const filterOnlyBlog = file =>
  file.pathname.indexOf('/blog/') !== -1 &&
  file.pathname.indexOf('index.html') == -1

const Index = (props: Props) => {
  const { files } = props.siteMeta

  return (
    <div>
      {files.filter(filterOnlyBlog).map(file => {
        const { snippet, data, pathname } = file
        // Remove .html
        const address = pathname.slice(0, -5)
        return (
          <div key={address}>
            <h3>
              <Link to={address}>{data.title}</Link>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: snippet }} />
          </div>
        )
      })}
    </div>
  )
}

const Blog = (props: RenderProps) => {
  return (
    <Wrapper>
      <Section>
        <Header title="Blog posts" />

        <Index {...props} />
      </Section>

      <Footer />

      <Title />
      <Links />
    </Wrapper>
  )
}

export default Blog
