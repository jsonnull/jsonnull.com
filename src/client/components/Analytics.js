// @flow
import * as React from 'react'
import { Route } from 'react-router-dom'

const logPageView = () => {
  if (typeof window !== 'undefined') {
    window.gtag('event', 'page_view')
  }

  return null
}

const Analytics = () => {
  return <Route path="/" component={logPageView} />
}

export default Analytics
