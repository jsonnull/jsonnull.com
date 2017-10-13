// @flow
import React from 'react'
import Helmet from 'react-helmet'
import Home from 'containers/templates/Home'
import Page from 'containers/templates/Page'
import Twitter from 'containers/templates/Twitter'

type Props = {
  template: string,
  content: string
}

const Template = (props: Props) => {
  const { template, ...rest } = props

  switch (template) {
    case 'home':
      return <Home {...rest} />
    case 'twitter':
      return <Twitter {...rest} />
    default:
      return <Page {...rest} />
  }
}

const Site = (props: Props) => {
  return (
    <div>
      <Helmet title="☕️💻🎨✏️🎵" titleTemplate="Jason Nall - %s" />
      <Template {...props} />
    </div>
  )
}
export default Site
