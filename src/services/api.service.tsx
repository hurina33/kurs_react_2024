import axios, {AxiosResponse} from "axios";
import {IPostModels} from "../modules/IPostModels";
import {IFormModel} from "../modules/IFormModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

const postService = {
    savePost: ({title,body,userId}:IFormModel):Promise<AxiosResponse<IPostModels>> => {
        return axiosInstance.post(
            '/posts',
            {body,title,userId},
            {headers: {'Content-type': 'application/json; charset=UTF-8',}})}}

export{
    postService
}