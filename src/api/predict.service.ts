import axios, {AxiosResponse} from 'axios';
import Jimp from "jimp/types/ts3.1";

const baseUrl = 'http://localhost:8080';
const uri = '/predict/';

class PredictService {
  async predict(image: any): Promise<AxiosResponse> {
    const url = baseUrl + uri ;
    const buffer = await image.getBufferAsync(image.getMIME());
    console.log('post request');
    return axios.post(url, buffer, {
      headers : {
        'Content-Type': image.getMIME()
      }
    });
  }


}

export const predictService = new PredictService();
