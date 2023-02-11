import * as React from 'react'
import type { GetStaticProps } from 'next'
import Link from 'next/link'
import { Heading, Page, Wrapper } from '../../components'
import { promises } from 'fs'
import matter from 'gray-matter'
import { getPosts } from '../../lib/getPosts'
import type { Post } from '../../types';

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: { posts: Post[] }
}> => {
  const posts: Post[] = []
  for await (const { url, path } of getPosts()) {
    const { data } = await promises
      .readFile(path)
      .then((buf) => matter(buf.toString(), { delimiters: '```' }))

    posts.push({ ...data, url } as any)
  }

  return {
    props: {
      posts,
    },
  }
}

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <Wrapper>
      <Heading>Blog</Heading>
      {posts.map((post) => {
        return (
          <Link key={post.url} href={post.url}>
            {post.title}
          </Link>
        )
      })}
    </Wrapper>
  )
}

Posts.getLayout = (page: React.ReactNode) => (
  <Page title="Blog" pagePath="/blog/">
    {page}
  </Page>
)

export default Posts
