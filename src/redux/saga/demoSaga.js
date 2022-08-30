import { put, takeEvery } from 'redux-saga/effects'

export const DEMO_SAGA = function* perform_demoAction() {
  yield takeEvery('DEMO', function* (action) {
    yield put({ type: 'DEMO_STARTED' })
    try {
      yield put({ type: 'DEMO_SUCCESS', payload: action.payload })
    } catch (error) {
      yield put({ type: 'DEMO_FAILED', payload: error })
    }
  })
}
