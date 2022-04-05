import { Helmet } from 'react-helmet'
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
  const { data, content } = await promises
    .readFile(`./content/blog/${context.params.slug.join('/')}.md`)
    .then((buf) => matter(buf.toString(), { delims: '```' }))

  return {
    props: {
      data,
      content,
    },
  }
}

const Post = ({ data, content }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <Heading>{data.title}</Heading>
      <Markdown>{content}</Markdown>
    </Wrapper>
  )
}

Post.getLayout = (page) => <Page title="Blog">{page}</Page>

export default Post
