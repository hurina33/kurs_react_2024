import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {baseUrl} from "../constans/urls";
import {urls} from "../constans/urls";
const axiosIntance = axios.create({
    baseURL:baseUrl
})

const userService = {
    getUser: ():Promise<AxiosResponse<IUserModel[]>> =>{
        return axiosIntance.get<IUserModel[]>(urls.users.allUsers)
    },
    getUserById:(id:string):Promise<AxiosResponse<IUserModel>> =>{
        return axiosIntance.get<IUserModel>(urls.users.byId(id))
    }

}
export {
    userService,
}