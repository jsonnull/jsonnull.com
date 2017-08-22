import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  width: 1020px;
  position: relative;
  margin: 0 auto 0;
`

const Content = props => (
  <ContentWrapper dangerouslySetInnerHTML={{__html: props.content}} />
)

export default Content
