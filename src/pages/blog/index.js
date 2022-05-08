import Link from 'next/link'
import { ClearHeader, Heading, Page, Wrapper } from '../../components'
import { promises } from 'fs'
import matter from 'gray-matter'
import { getPosts } from '../../lib/getPosts'

export async function getStaticProps(context) {
  const posts = []
  for await (const { url, path } of getPosts()) {
    const { data } = await promises
      .readFile(path)
      .then((buf) => matter(buf.toString(), { delims: '```' }))

    posts.push({ ...data, url })
  }

  return {
    props: {
      posts,
    },
  }
}

const Posts = ({ posts }) => {
  return (
    <Wrapper>
      <Heading>Blog</Heading>
      {posts.map((post) => {
        return (
          <Link key={post.url} href={post.url}>
            <a href={post.url}>{post.title}</a>
          </Link>
        )
      })}
    </Wrapper>
  )
}

Posts.getLayout = (page) => (
  <Page title="Blog" pagePath="/blog/">
    {page}
  </Page>
)

export default Posts
