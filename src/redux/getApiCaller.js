import fetch from 'cross-fetch'
import { checkStatus, parseJSON } from '../utils/responseHandler'

const constant = {
  URL: 'API URL'
}
// Make an api call

export default async (url, method = 'get', authorization) => {
  var headers = {}
  if (authorization) {
    headers = {
      'Content-Type': 'application/json',
      auth_token: localStorage.getItem('token')
    }
  } else {
    headers = {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${constant.URL}${url}`, {
    method,
    headers: headers
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => {
      throw error
    })
}
