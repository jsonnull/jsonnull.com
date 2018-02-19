// @flow
import * as React from 'react'
import { Route } from 'react-router-dom'

/*
 * Component which logs on every page change
 */
const LogPageView = () => {
  if (typeof window !== 'undefined') {
    window.ga('send', 'pageview')
  }

  return null
}

/*
 * Component which runs once on setup and only renders children when the page
 * changes
 */
type Props = {
  location: Object
}
class AnalyticsImpl extends React.Component<Props, *> {
  shouldComponentUpdate(nextProps) {
    const isSamePath =
      nextProps.location.pathname !== this.props.location.pathname
    const isSameHash = nextProps.location.hash !== this.props.location.hash

    return !isSamePath || !isSameHash
  }

  render() {
    return <LogPageView />
  }
}

const Analytics = () => {
  return <Route path="/" component={AnalyticsImpl} />
}

export default Analytics
