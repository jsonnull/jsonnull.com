// @flow
import * as React from 'react'
import { Route } from 'react-router-dom'

class LogPageView extends React.Component {
  location: Object

  componentWillMount() {
    const { location } = this.props
    this.location = {}
  }

  render() {
    if (typeof window === 'undefined') {
      return null
    }

    const isSamePath = this.location.pathname !== this.props.location.pathname
    const isSameHash = this.location.hash !== this.props.location.hash

    if (!isSamePath || !isSameHash) {
      return null
    }

    window.gtag('event', 'page_view')
    return null
  }
}

const Analytics = () => {
  return <Route path="/" component={LogPageView} />
}

export default Analytics
