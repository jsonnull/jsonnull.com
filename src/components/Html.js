import React from 'react'
import Head from './Head'

class Html extends React.Component {
  render () {
    return <html>
      <Head {...this.props} />
      <body>
        <div id="react-root" dangerouslySetInnerHTML={{__html: this.props.content}} />
      </body>
    </html>
  }
}

export default Html
