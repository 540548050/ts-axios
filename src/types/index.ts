export type Method = 'get' | 'GET' | 'post' | 'POST' | 'options' | 'OPTIONS'
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  config: AxiosRequestConfig
  request: any
  headers: any
}
export interface AxiosPromise extends Promise<AxiosResponse> {}
