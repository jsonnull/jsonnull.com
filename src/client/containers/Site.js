// @flow
import React from 'react'
import Helmet from 'react-helmet'
import Home from 'containers/templates/Home'
import Page from 'containers/templates/Page'
import Blog from 'containers/templates/Blog'
import Twitter from 'containers/templates/Twitter'
import type { RenderProps } from 'types'

const Template = (props: RenderProps) => {
  const { template } = props

  switch (template) {
    case 'home':
      return <Home {...props} />
    case 'twitter':
      return <Twitter {...props} />
    case 'blog':
      return <Blog {...props} />
    default:
      return <Page {...props} />
  }
}

const Site = (props: RenderProps) => {
  return (
    <div>
      <Helmet title="☕️💻🎨✏️🎵" titleTemplate="Jason Nall - %s" />
      <Template {...props} />
    </div>
  )
}
export default Site
