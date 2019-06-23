export type Method = 'get' | 'GET' | 'post' |'POST'|
'options'|'OPTIONS'
export interface AxiosRequestConfig{
    url:string;
    method?:Method;
    data?:any;
    params?:any;
}