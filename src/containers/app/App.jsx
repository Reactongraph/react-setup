import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Heading from '../../components/common/heading/Heading'

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch({ type: 'DEMO', payload: { title: 'Hello from Action' } })
  }, [])

  return (
    <React.Fragment>
      <Heading
        title="Hello from application component"
        className="appHeading"
      />
    </React.Fragment>
  )
}

export default connect()(App)
