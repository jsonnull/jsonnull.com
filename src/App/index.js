import React from 'react'

class App extends React.Component {
  render () {
    return <div dangerouslySetInnerHTML={{__html: this.props.content}} />
  }
}

export default App
