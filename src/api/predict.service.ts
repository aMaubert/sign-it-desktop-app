import axios, {AxiosResponse} from 'axios';
import Jimp from "jimp/types/ts3.1";
import {IModel} from "@/definitions";

const baseUrl = process.env.VUE_APP_API_BASE_URL !== undefined ? process.env.VUE_APP_API_BASE_URL : 'http://localhost:5000' ;
//'http://localhost:8080'
const uri = '/predict/';

class PredictService {
  async predict( image: any, model: IModel): Promise<AxiosResponse> {
    const url = baseUrl + uri ;
    const buffer = await image.getBufferAsync(image.getMIME());
    console.log('post request');
    return axios.post(url, buffer, {
      headers : {
        'Content-Type': image.getMIME(),
        'X-Model-Type' : model.type,
        'X-Image-Format' : model.image_format,
        'X-Image-Size' : model.image_size,
        'X-Epochs' : model.nb_epochs
      }
    });
  }
}

export const predictService = new PredictService();
