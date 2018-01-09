// @flow
import * as React from 'react'
import Helmet from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'
import type { RenderProps } from 'types'

const Home = {
  path: '/',
  exact: true,
  component: asyncComponent({
    resolve: () => import(/* webpackChunkName: "home" */ './templates/Home')
  })
}

const Blog = {
  path: '/blog',
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

const routes = [Home, Blog, Twitter, Page]

const logPageView = () => {
  if (typeof window !== 'undefined') {
    window.gtag('event', 'page_view')
  }

  return null
}

const Site = (props: RenderProps) => {
  return (
    <div>
      <Helmet titleTemplate="Jason Nall - %s">
        <title>Designer and Developer</title>
      </Helmet>

      <Route path="/" component={logPageView} />

      <Switch>
        ${routes.map((routeProps, i) => <Route key={i} {...routeProps} />)}
      </Switch>
    </div>
  )
}
export default Site
