// Server
const React = require('react')
const createHtml = require('./html')
const ReactDOMServer = require('react-dom/server')
const { Helmet } = require('react-helmet')
const { ServerStyleSheet } = require('styled-components')
const matter = require('gray-matter')
const MarkdownIt = require('markdown-it')

// The bundle will insert itself in the global context in the server environment
require('../../../public/bundle.js')
const App = global.App

const matterOpts = {
  language: 'json',
  delimiters: '```'
}

// On the server side, export a function to perform the render
module.exports = (rawMarkdownContent, siteMeta) => {
  // frontmatter pass
  const { data, content } = matter(rawMarkdownContent, matterOpts)

  // render markdown
  const md = new MarkdownIt()
  const rendered = md.render(content)

  // extract props from frontmatter
  const { template = 'page' } = data

  // Create stylesheet
  const sheet = new ServerStyleSheet()

  // render body
  const body = ReactDOMServer.renderToString(
    sheet.collectStyles(
      React.createElement(App, {
        content: rendered,
        template,
        siteMeta
      })
    )
  )

  // Get React style elements
  const styleElements = sheet.getStyleTags()

  // get header markup
  const head = Helmet.renderStatic()

  // render full markup
  const html = createHtml({
    body,
    content: rendered,
    head,
    template,
    siteMeta,
    styles: styleElements
  })

  return html
}
