import { all } from 'redux-saga/effects'
import { DEMO_SAGA } from './demoSaga'

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([DEMO_SAGA()])
}

export default rootSaga
