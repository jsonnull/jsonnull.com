/* @flow */
import React from 'react'

type Props = {
  content: string,
  template: string
}

class Content extends React.Component<*, Props, *> {
  render () {
    return (
      <div className="content"
        dangerouslySetInnerHTML={{__html: this.props.content}}
        />
    )
  }
}

export default Content
