// @flow
import { asyncComponent } from 'react-async-component'

export const Home = asyncComponent({
  resolve: () => import(/* webpackChunkName: "home" */ './Home')
})

export const Work = asyncComponent({
  resolve: () => import(/* webpackChunkName: "work" */ './Work')
})

export const Blog = asyncComponent({
  resolve: () => import(/* webpackChunkName: "blog" */ './Blog')
})

export const About = asyncComponent({
  resolve: () => import(/* webpackChunkName: "about" */ './About')
})

export const Twitter = asyncComponent({
  resolve: () => import(/* webpackChunkName: "twitter" */ './Twitter')
})
