import React from 'react'
import Head from './head'
import './style.css'

class Html extends React.Component {
  render () {
    return <html>
      <Head />
      <body>
        <div id="react-root"
          dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </body>
    </html>
  }
}

export default Html
