import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import ProjectRoutes from './routes/index'
import ErrorBoundary from './components/errorBoundary'
import Store from './redux/store.js'

ReactDOM.render(
  <Provider store={Store}>
    <ErrorBoundary>
      <ProjectRoutes />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
