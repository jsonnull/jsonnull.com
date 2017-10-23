const matter = require('gray-matter')
const MarkdownIt = require('markdown-it')

const matterOpts = {
  language: 'json',
  delimiters: '```'
}

const markdownRenderer = new MarkdownIt()

const renderContent = rawMarkdownContent => {
  // frontmatter pass
  const { data, content } = matter(rawMarkdownContent, matterOpts)

  // render markdown
  const rendered = markdownRenderer.render(content)

  return { content: rendered, data }
}

module.exports = renderContent
