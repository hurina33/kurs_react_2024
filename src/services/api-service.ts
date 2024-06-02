import axios, {AxiosResponse} from "axios";
import {baseUrl} from "../urls/urls";
import {urls} from "../urls/urls";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
let axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});

const usersApiService = {
    getAllUsers:(): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get(urls.users.allUsers)
    },
    getAllPosts:(): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(urls.posts.allPosts)
    },
    getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> =>{
        return axiosInstance.get(urls.comments.allComments)
}
}

export {
    usersApiService
}
