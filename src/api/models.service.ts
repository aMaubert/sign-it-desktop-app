import axios, {AxiosResponse} from "axios";
import {IModel} from "@/definitions/model.interface";

const baseUrl = 'http://localhost:8080';
const uri = '/models/';


class ModelsService {

    async fetchAll(): Promise<Array<IModel>> {
        const url = baseUrl + uri;
        const response =  await axios.get(url) ;
        return response.data as Array<IModel>;
    }

}

export const modelsService = new ModelsService();
