// @flow
import * as React from 'react'
import Helmet from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import { Home, Work, Blog, About, Twitter } from './pages'
import { Post, Page } from './templates'
import Analytics from '../../components/Analytics'
import type { RenderProps } from 'types'

const Site = (props: RenderProps) => {
  return (
    <div>
      <Helmet titleTemplate="Jason Nall - %s">
        <title>Designer and Developer</title>
      </Helmet>

      <Analytics />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/case-studies/" exact component={Work} />
        <Route path="/blog/:year/:month/:title" exact component={Post} />
        <Route
          path="/blog/"
          exact
          render={({ match }) => {
            return <Blog match={match} {...props} />
          }}
        />
        <Route path="/about/" exact component={About} />
        <Route path="/twitter" exact component={Twitter} />
        <Route component={Page} />
      </Switch>
    </div>
  )
}
export default Site
