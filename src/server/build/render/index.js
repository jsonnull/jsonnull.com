// Server
const React = require('react')
const createHtml = require('./html')
const ReactDOMServer = require('react-dom/server')
const { ServerStyleSheet } = require('styled-components')
const appRoot = require('app-root-path')
const renderMarkdown = require('./markdown')

// The bundle will insert itself in the global context in the server environment
require(appRoot + '/public/bundle.js')
const App = global.App

// Also import the Helmet instance from the app
// See https://github.com/nfl/react-helmet/issues/125
const Helmet = global.Helmet

// On the server side, export a function to perform the render
module.exports = (rawMarkdownContent, siteMeta) => {
  // frontmatter pass
  const { content, data } = renderMarkdown(rawMarkdownContent)

  // extract props from frontmatter
  const { template = 'page' } = data

  // Create stylesheet
  const sheet = new ServerStyleSheet()

  // render body
  const body = ReactDOMServer.renderToString(
    sheet.collectStyles(
      React.createElement(App, {
        content,
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
    content,
    head,
    template,
    siteMeta,
    styles: styleElements
  })

  return html
}
