import { AxiosRequestConfig, AxiosResponse, AxiosPromise } from './types'
import { processResponseHeader } from './helper/processHeader'
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise(resolve => {
    const { data = null, url, method = 'GET', headers, responseType } = config
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, true)
    if (responseType) {
      request.responseType = responseType
    }
    request.onreadystatechange = function() {
      if (request.readyState !== 4) {
        return
      }
      const data = responseType === 'text' ? request.responseText : request.response
      const headers = processResponseHeader(request.getAllResponseHeaders())
      const response: AxiosResponse = {
        data,
        status: request.status,
        statusText: request.statusText,
        config,
        headers,
        request
      }
      resolve(response)
    }
    Object.keys(headers).forEach(name => {
      request.setRequestHeader(name, headers[name])
    })
    request.send(data)
  })
}
