import React from 'react'
import styled from 'styled-components'

const Content = props => (
  <div dangerouslySetInnerHTML={{ __html: props.content }} />
)

export default Content
