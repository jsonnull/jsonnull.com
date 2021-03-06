import React from 'react'
import { ClearHeader, Heading, Page, Wrapper } from '../../components'
import { promises } from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getPosts } from '../../lib/getPosts'

export async function getStaticPaths() {
  const paths = []
  for await (const { slug } of getPosts()) {
    paths.push({ params: { slug } })
  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { data, content } = await promises
    .readFile(`./content/blog/${context.params.slug.join('/')}.md`)
    .then(buf => matter(buf.toString(), { delims: '```' }))

  return {
    props: {
      data,
      content
    }
  }
}

const Post = ({ data, content }) => {
  return (
    <Page title={data.title}>
      <ClearHeader />
      <Wrapper>
        <Heading>{data.title}</Heading>
        <Markdown>{content}</Markdown>
      </Wrapper>
    </Page>
  )
}

export default Post
