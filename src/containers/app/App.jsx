import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Heading from '../../components/common/heading/Heading'

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch({ type: 'DEMO', payload: { title: 'Hello from Action' } })
  }, [])

  return (
    <Heading title="Hello from application component" className="appHeading" />
  )
}

export default connect()(App)
