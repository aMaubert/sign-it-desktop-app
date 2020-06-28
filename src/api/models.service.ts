import axios, {AxiosResponse} from "axios";
import {IModel} from "@/definitions/model.interface";

const baseUrl = 'http://localhost:5000';
const uri = '/models/';


class ModelsService {

    async fetchAll(): Promise<Array<IModel>> {
        const url = baseUrl + uri;
        const response =  await axios.get(url) ;
        return response.data as Array<IModel>;
    }

    async fetchAllTypes(): Promise<Array<IModel>> {
        const url = baseUrl + uri + 'types';
        const response =  await axios.get(url) ;
        return response.data as Array<IModel>;
    }

    async createModel(model: IModel): Promise<void> {
        const url = baseUrl + uri;
        await axios.post(url, model);
    }

}

export const modelsService = new ModelsService();
