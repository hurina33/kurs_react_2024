import axios from "axios";
import {baseUrl, urls} from "../constans/url";
import {ICharacterResponse} from "../models/ICharacterResponse";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})

const characterService = {
    getAll: async (page:string)=> {
        const axiosResponse =
            await axiosInstance.get<ICharacterResponse>(urls.character.all, {params:{page:page}});
        return axiosResponse
    }
}
export {
    characterService
}