// @flow
import React from 'react'
import styled from 'styled-components'
import { fonts } from '../styles/base'
import type { RenderProps } from 'types'

const filterOnlyBlog = file =>
  file.pathname.indexOf('/blog/') !== -1 &&
  file.pathname.indexOf('index.html') == -1

const Index = (props: RenderProps) => {
  const { files } = props.siteMeta

  return (
    <div>
      {files.filter(filterOnlyBlog).map(file => {
        const { snippet, data, pathname } = file
        console.assert(data.title !== undefined)
        return (
          <div key={pathname}>
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: snippet }} />
          </div>
        )
      })}
    </div>
  )
}

export default Index
