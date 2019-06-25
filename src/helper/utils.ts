let toString = Object.prototype.toString
export function isObject(val: any): val is Object {
  return toString.call(val).slice(8, -1) === 'Object'
}
export function isDate(val: any): val is Date {
  return toString.call(val).slice(8, -1) === 'Date'
}
