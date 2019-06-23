
let toString = Object.prototype.toString;
export function isObject(val:any):val is Object{
    return toString.call(val).slice(8,-1) === 'Object';
}