import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Html from './html' 
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const matterOpts = {
  lang: 'json',
  delims: '```'
}

export default function render (raw) {
  const { data, content } = matter(raw, matterOpts)
  const md = new MarkdownIt()
  const rendered = md.render(content)
  return ReactDOMServer.renderToStaticMarkup(<Html content={rendered} />)
}

