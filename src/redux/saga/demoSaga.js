import { put, takeEvery, call } from 'redux-saga/effects'
import get from '../getApiCaller'

const API_DATA = payload => {
  // return get('endPoint', 'GET', true).then(response => {
  //   return response
  // })
}

export const DEMO_SAGA = function* perform_demoAction() {
  yield takeEvery('DEMO', function*(action) {
    yield put({ type: 'DEMO_STARTED' })
    try {
      // const DATA = yield call(API_DATA.bind(this, action.payload))
      yield put({ type: 'DEMO_SUCCESS', payload: action.payload })
    } catch (error) {
      yield put({ type: 'DEMO_FAILED', payload: error })
    }
  })
}
