/* @flow */
import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header/Header'
import Content from './Content/Content'

type Props = {
  content: string,
  template: string
}

class App extends React.Component<*, Props, *> {
  render () {
    return (
      <div>
        <Helmet
          title="☕️💻🎨✏️🎵"
          titleTemplate="Jason Nall - %s"
          />
          <Header />
          <Content {...this.props} />
      </div>
    )
  }
}

export default App
