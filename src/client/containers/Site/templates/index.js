// @flow
import { asyncComponent } from 'react-async-component'

export const Post = asyncComponent({
  resolve: () => import(/* webpackChunkName: "post" */ './Post')
})

export const Page = asyncComponent({
  resolve: () => import(/* webpackChunkName: "page" */ './Page')
})
