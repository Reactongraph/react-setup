import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import ProjectRoutes from './routes/index'
import ErrorBoundary from './components/errorBoundary'
import Store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <ErrorBoundary>
      <ProjectRoutes />
    </ErrorBoundary>
  </Provider>
)
