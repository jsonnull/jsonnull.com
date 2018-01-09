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
import Site from './containers/Site'
import { colors } from './styles/base'
import { background, color } from './styles/links'

// On the client side, render the app
if (typeof window !== 'undefined') {
  async function main() {
    injectGlobal`
      a, a:link, a:visited, a:hover, a:active {
        ${color(colors.blue)}
        ${background(colors.white)}
      }
    `

    const rehydrateState = window.ASYNC_COMPONENTS_STATE

    const app = (
      <AsyncComponentProvider rehydrateState={rehydrateState}>
        <BrowserRouter>
          <Site />
        </BrowserRouter>
      </AsyncComponentProvider>
    )

    // Wait for existing components to load
    await asyncBootstrapper(app)

    ReactDOM.hydrate(app, document.getElementById('react-root'))
  }

  window.onload = main
}
