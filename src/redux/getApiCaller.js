import fetch from 'cross-fetch'
import { checkStatus, parseJSON } from '../utils/responseHandler'

const constant = {
  URL: 'API URL',
}
// Make an api call

export default async (url, method = 'get', authorization) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  if (authorization) {
    headers = {
      ...headers,
      auth_token: localStorage.getItem('token'),
    }
  }
  return fetch(`${constant.URL}${url}`, {
    method,
    headers,
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch((error) => {
      throw error
    })
}
