// @flow
import * as React from 'react'
import { Route } from 'react-router-dom'

class LogPageView extends React.Component {
  shouldComponentUpdate(nextProps) {
    const isSamePath =
      nextProps.location.pathname !== this.props.location.pathname
    const isSameHash = nextProps.location.hash !== this.props.location.hash

    if (isSamePath && isSameHash) {
      return false
    }

    return true
  }

  render() {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'page_view')
    }

    return null
  }
}

const Analytics = () => {
  return <Route path="/" component={LogPageView} />
}

export default Analytics
