// @flow
import * as React from 'react'
import Helmet from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
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
        ${routes.map((routeProps, i) => <Route key={i} {...routeProps} />)}
      </Switch>
    </div>
  )
}
export default Site
