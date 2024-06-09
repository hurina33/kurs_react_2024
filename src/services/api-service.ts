import axios, {AxiosResponse} from "axios";
import {baseUrl, urls} from "../urls/urls";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

let axiosInstance = axios.create({
    baseURL:baseUrl
})

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get(urls.users.allUsers)
    },
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> =>{
        return axiosInstance.get(urls.posts.allPosts)
    },
    getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> =>{
        return axiosInstance.get(urls.comments.allComments)
    },
    getPostsOfUser: (userId:string): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(`users/${userId}/posts`)
    },
    getCommentsOfPost: (postId:string): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get(`posts/${postId}/comments`)
    }
}

export {
    userApiService
}