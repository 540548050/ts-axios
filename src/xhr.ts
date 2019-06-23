import {AxiosRequestConfig} from './types'
export default function xhr(config:AxiosRequestConfig){
    const {data=null,params,url,method='GET'} = config;
    const request = new XMLHttpRequest();

    request.open(method.toUpperCase(),url,true);

    request.send(data);
}