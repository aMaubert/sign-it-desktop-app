import axios, {AxiosResponse} from 'axios';
import Jimp from "jimp/types/ts3.1";
import {IModel} from "@/definitions";

const baseUrl = process.env.VUE_APP_API_BASE_URL !== undefined ? process.env.VUE_APP_API_BASE_URL : 'http://localhost:5000' ;
//'http://localhost:8080'
const uri = '/predict/';

const makeOptionsRequest = function (options: {[index: string]:any} ) {
  const optionList = [];

  for(const eachOptionName in options) {
    const option  = options[eachOptionName];
    if( typeof option === 'string' || typeof option === 'number' || typeof option === 'boolean' ) {
      optionList.push(`${eachOptionName}=${option}`);
    } else if( Array.isArray(option)) {
      optionList.push(`${eachOptionName}=(${option.join(',') })`);//option.map(val => `${eachOptionName}=${val}`
    } else if( option && typeof option === 'object') {
      optionList.push(`${eachOptionName}=${option.toJSON()}`)
    }
  }
  return optionList;
};

class PredictService {
  async predict( image: any, model: IModel): Promise<AxiosResponse> {
    const options = makeOptionsRequest(model);
    const url = baseUrl + uri + '?' + options.join('&');
    const buffer = await image.getBufferAsync(image.getMIME());
    console.log({url});
    return axios.post(url, buffer, {
      headers : {
        'Content-Type': image.getMIME()
      }
    });
  }
}

export const predictService = new PredictService();
