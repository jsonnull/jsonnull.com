import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'

// On the client side, render the app
if (typeof window !== 'undefined') {
  ReactDOM.render(
    <App {...window.__PROPS} />,
    document.getElementById('react-root')
  )
}

export default App
