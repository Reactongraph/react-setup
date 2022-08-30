import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = React.lazy(() => import('../containers/app/App'))
const NotFound = React.lazy(() => import('../components/notFound/NotFound'))

const Loading = () => {
  return <div className="appHeader">...loading</div>
}

const ProjectRoutes = props => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/"  element={<App/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default ProjectRoutes
