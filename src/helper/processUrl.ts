import { isArray } from "util";
import {isObject} from './utils';
export function encode(val:string):string{
    return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
export function ProcessUrl(url:string,params?:any):string{
    if(!params){
        return url;
    }
    let parts:string[]=[];
    Object.keys(params).forEach(key=>{
        let val = params[key];
        if(val ===null || val ===undefined){
            return;
        }
        if(isArray(val)){
            val.forEach((val)=>{
                parts.push(`${key}[]=${val}`)
            })
        }else if(isObject(val)){
            val = JSON.stringify(val);
            parts.push(`${key}=${val}`)
        }else{
            parts.push(`${key}=${val}`)
        }
    })
    let search = parts.join('&');
    if(search){
        let hashIndex = url.indexOf('#')
        if(hashIndex !==-1){
            url = url.substring(0,hashIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + search;
    }
    return url;
}