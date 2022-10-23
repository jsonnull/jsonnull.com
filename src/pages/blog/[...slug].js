import { promises } from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { Heading, Page, Wrapper } from '../../components'
import { getPosts } from '../../lib/getPosts'

export async function getStaticPaths() {
  const paths = []
  for await (const { slug } of getPosts()) {
    paths.push({ params: { slug } })
  }

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const path = context.params.slug.join('/')
  const slug = context.params.slug.join('-')

  const { data, content } = await promises
    .readFile(`./content/blog/${path}.md`)
    .then((buf) => matter(buf.toString(), { delims: '```' }))

  return {
    props: {
      data,
      content,
      path,
      slug,
    },
  }
}

const Post = ({ data, content }) => {
  return (
    <Wrapper>
      <Heading>{data.title}</Heading>
      <Markdown>{content}</Markdown>
    </Wrapper>
  )
}

Post.getLayout = (page, { data, path, slug }) => (
  <Page
    title={data.title}
    pagePath={`/blog/${path}/`}
    // ogImagePath={`/og-images/${slug}.png`}
  >
    {page}
  </Page>
)

export default Post
