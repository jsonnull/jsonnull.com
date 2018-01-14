// Server
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Helmet from 'react-helmet'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import {
  AsyncComponentProvider,
  createAsyncContext
} from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'
import createHtml from './html'
import Site from '../../client/containers/Site'

// On the server side, export a function to perform the render
const render = async (siteMeta, location, scriptName) => {
  const asyncContext = createAsyncContext()
  const sheet = new ServerStyleSheet()

  const app = (
    <AsyncComponentProvider asyncContext={asyncContext}>
      <StaticRouter location={location} context={{}}>
        <Site siteMeta={siteMeta} />
      </StaticRouter>
    </AsyncComponentProvider>
  )

  sheet.collectStyles(app)
  await asyncBootstrapper(app)

  const body = ReactDOMServer.renderToString(app)

  const asyncState = asyncContext.getState()
  const styleElements = sheet.getStyleTags()
  const head = Helmet.renderStatic()

  const html = createHtml({
    body,
    head,
    asyncState,
    siteMeta,
    scriptName,
    styles: styleElements
  })

  return html
}

export default render
