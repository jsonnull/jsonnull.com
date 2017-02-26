import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Helmet from 'react-helmet'
import Html from './components/Html' 
import App from './App' 
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import './style.css'

const matterOpts = {
  lang: 'json',
  delims: '```'
}

export default function render (raw) {
  // frontmatter pass
  const { data, content } = matter(raw, matterOpts)

  // render markdown
  const md = new MarkdownIt()
  const rendered = md.render(content)

  // extract props from frontmatter
  const { template = 'page' } = data

  // render body
  const body = ReactDOMServer.renderToString(<App content={rendered} template={template} />)

  // get header markup
  const head = Helmet.rewind()
  const html = ReactDOMServer.renderToStaticMarkup(<Html content={body} head={head} />)

  return html
}

