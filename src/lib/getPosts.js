import { getFiles } from './getFiles'

export async function* getPosts() {
  for await (const file of getFiles('./content/blog/')) {
    const path = file.slice(file.indexOf('content/blog/'))
    const slug = path
      .replace('content/blog/', '')
      .replace('.md', '')
      .split('/')
    const url = `/blog/${slug.join('/')}`

    yield {
      slug,
      url,
      path
    }
  }
}
