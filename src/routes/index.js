import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const App = React.lazy(() => import('../containers/app/App'))
const NotFound = React.lazy(() => import('../components/notFound/NotFound'))

const Loading = () => {
  return <div className="appHeader">...loading</div>
}

const ProjectRoutes = props => {
  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default ProjectRoutes
