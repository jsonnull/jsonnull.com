// @flow
import * as React from 'react'
import { Route } from 'react-router-dom'

const uuid = function b(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b)
}

const performAnalyticsSetup = () => {
  if (typeof window === 'undefined') {
    return
  }

  // Track custom dimensions
  const dimensions = {
    TRACKING_VERSION: 'dimension1',
    CLIENT_ID: 'dimension2',
    WINDOW_ID: 'dimension3',
    HIT_ID: 'dimension4',
    HIT_TIME: 'dimension5',
    HIT_TYPE: 'dimension6'
  }

  // Values for custom dimensions
  const TRACKING_VERSION = '1'

  // Initialize the command queue in case analytics.js hasn't loaded yet.
  window.ga = window.ga || ((...args) => (ga.q = ga.q || []).push(args))

  // Perform setup
  const ga = window.ga
  ga('create', 'UA-112190148-1', 'auto')
  ga('set', 'transport', 'beacon')

  /*
   * Begin custom dimensions tracking
   */

  // Tracking Version
  ga('set', dimensions.TRACKING_VERSION, TRACKING_VERSION)
  // Client ID
  ga(tracker => {
    const clientId = tracker.get('clientId')
    tracker.set(dimensions.CLIENT_ID, clientId)
  })
  // Window ID
  ga('set', dimensions.WINDOW_ID, uuid())
  ga(tracker => {
    const originalBuildHitTask = tracker.get('buildHitTask')
    tracker.set('buildHitTask', model => {
      model.set(dimensions.HIT_ID, uuid(), true)
      model.set(dimensions.HIT_TIME, String(+new Date()), true)
      model.set(dimensions.HIT_TYPE, model.get('hitType'), true)

      originalBuildHitTask(model)
    })
  })
}

/*
 * Component which logs on every page change
 */
const LogPageView = () => {
  if (typeof window !== 'undefined') {
    const ga = window.ga
    ga('send', 'pageview')
  }

  return null
}

/*
 * Component which runs once on setup and only renders children when the page
 * changes
 */
class AnalyticsImpl extends React.Component {
  constructor() {
    super()
    performAnalyticsSetup()
  }

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
