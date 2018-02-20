import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'
import {
  AsyncComponentProvider,
  createAsyncContext
} from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'
import performAnalyticsSetup from './analytics.js'
import Site from './containers/Site'
import { colors } from './styles/base'
import { background, color } from './styles/links'
import favicon from '../../static/img/favicon.png'

// On the client side, render the app
if (typeof window !== 'undefined') {
  async function main() {
    injectGlobal`
      a, a:link, a:visited, a:hover, a:active {
        ${color(colors.blue)}
        ${background(colors.white)}
      }
    `

    performAnalyticsSetup()

    const rehydrateState = window.ASYNC_COMPONENTS_STATE
    const siteMeta = window.SITE_META

    const app = (
      <AsyncComponentProvider rehydrateState={rehydrateState}>
        <BrowserRouter>
          <Site siteMeta={siteMeta} />
        </BrowserRouter>
      </AsyncComponentProvider>
    )

    if (process.env.NODE_ENV === 'development') {
      ReactDOM.render(app, document.getElementById('react-root'))
    } else {
      window.asyncInProgress = true

      // Wait for existing components to load
      await asyncBootstrapper(app)

      window.asyncInProgress = false

      ReactDOM.hydrate(app, document.getElementById('react-root'))
    }
  }

  window.onload = main
}
