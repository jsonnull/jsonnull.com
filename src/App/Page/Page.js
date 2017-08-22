import React from 'react'
import Helmet from 'react-helmet'
import Content from 'App/components/Content'

class Page extends React.Component {
  render () {
    return (
      <div>
        <Content {...this.props} />
      </div>
    )
  }
}

export default Page
