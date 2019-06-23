import {AxiosRequestConfig} from './types';
import xhr from './xhr';
import {ProcessUrl} from './helper/processUrl'
function axios(config:AxiosRequestConfig):void{
  config = processConfig(config);
  //todo
  xhr(config)
}
function processConfig(config:AxiosRequestConfig):AxiosRequestConfig{
  config.url = transformUrl(config);
  return config;
}
function transformUrl(config:AxiosRequestConfig):string{
  const {url,params} = config;
  return ProcessUrl(url,params);

}
export default axios;
