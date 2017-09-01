import React from 'react'
import Helmet from 'react-helmet'
import Home from './Home'
import Page from './Page'

const Template = props => {
  const { template, ...rest } = props

  if (template == 'home') {
    return <Home {...rest} />
  } else {
    return <Page {...rest} />
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="☕️💻🎨✏️🎵" titleTemplate="Jason Nall - %s" />
        <Template {...this.props} />
      </div>
    )
  }
}
export default App
