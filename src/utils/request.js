/**
 * Created by qiuyishu on 17/2/16.
 */
import fetch from 'whatwg-fetch'


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export default function request(url, options) {
  return fetch(url, options)
  .then(checkStatus)
  .then(parseJSON)
  .then((data) => ({ data }))
  .catch((err) => ({ err }));
}
