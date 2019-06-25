import { isObject } from './utils'
function normalizeHeader(header: any, normalizeName: string): any {
  Object.keys(header).forEach(name => {
    if (name !== normalizeName && name.toUpperCase() === normalizeName.toUpperCase()) {
      header[normalizeName] = header[name]
      delete header[name]
    }
  })
}
export function ProcessHeader(header: any = {}, data: any): any {
  if (isObject(data)) {
    normalizeHeader(header, 'Content-Type')
    if (!header['Content-Type']) {
      header['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return header
}
export function processResponseHeader(headers: string): any {
  let obj = Object.create(null)
  if (!headers) {
    return obj
  } else {
    headers.split('\r\n').forEach(line => {
      let [key, val] = line.split(':')
      if (!key) {
        return
      }
      key = key.trim().toLowerCase()
      val = val.trim()
      obj[key] = val
    })
  }
  return obj
}
