import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import { colors } from 'styles/base'
import { background, color } from 'styles/links'
import { injectGlobal } from 'styled-components'

// On the client side, render the app
if (typeof window !== 'undefined') {

  injectGlobal`
    a, a:link, a:visited, a:hover, a:active {
      ${color(colors.blue)}
      ${background(colors.white)}
    }
  `

  ReactDOM.render(
    <App {...window.__PROPS} />,
    document.getElementById('react-root')
  )
} else {
  global.App = App
}
