// @flow
import { asyncComponent } from 'react-async-component'

const Home = {
  path: '/',
  exact: true,
  component: asyncComponent({
    resolve: () => import(/* webpackChunkName: "home" */ './templates/Home')
  })
}

const Work = {
  path: '/case-studies/',
  exact: true,
  component: asyncComponent({
    resolve: () => import(/* webpackChunkName: "blog" */ './templates/Work')
  })
}

const Blog = {
  path: '/blog/',
  exact: true,
  component: asyncComponent({
    resolve: () => import(/* webpackChunkName: "blog" */ './templates/Blog')
  })
}

const Twitter = {
  path: '/twitter',
  exact: true,
  component: asyncComponent({
    resolve: () =>
      import(/* webpackChunkName: "twitter" */ './templates/Twitter')
  })
}

const Page = {
  component: asyncComponent({
    resolve: () => import(/* webpackChunkName: "page" */ './templates/Page')
  })
}

const routes = [Home, Work, Blog, Twitter, Page]

export default routes
