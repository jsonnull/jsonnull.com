import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style.css'

ReactDOM.render(
  <App {...window.__PROPS} />,
  document.getElementById('react-root')
)
