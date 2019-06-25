import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import xhr from './xhr'
import { ProcessUrl } from './helper/processUrl'
import { isObject } from './helper/utils'
import { ProcessHeader } from './helper/processHeader'
function axios(config: AxiosRequestConfig): AxiosPromise {
  config = processConfig(config)
  return xhr(config).then(res => {
    return transformResData(res)
  })
}
function processConfig(config: AxiosRequestConfig): AxiosRequestConfig {
  config.url = transformUrl(config)
  config.headers = transformHeader(config)
  config.data = transformData(config)
  return config
}
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return ProcessUrl(url, params)
}
function transformData(config: AxiosRequestConfig): any {
  let { data } = config
  if (isObject(data)) {
    data = JSON.stringify(data)
  }
  return data
}
function transformHeader(config: AxiosRequestConfig): any {
  return ProcessHeader(config.headers, config.data)
}
function transformResData(res: AxiosResponse): AxiosResponse {
  if (typeof res.data === 'string') {
    try {
      res.data = JSON.parse(res.data)
    } catch (e) {}
  }
  return res
}
export default axios
