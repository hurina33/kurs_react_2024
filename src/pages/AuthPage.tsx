import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IFormModel} from "../models/IFormModel";
import {authService} from "../services/api-service";
import {useSearchParams} from "react-router-dom";

const AuthPage = () => {
    const {
        register,
        handleSubmit,
    }=useForm<IFormModel>()

    const [isAuthState, setIsAuthState] = useState<boolean>(false)
    const authenticate =  async (formData:IFormModel):Promise <boolean> =>{
        const isAuth = await authService.authentication(formData)
        setIsAuthState(isAuth)
        return true;
    };

    return (
        <div>
            <h2> login form </h2>
            {
                isAuthState ? <span> ok</span> : <span> not ok </span>
            }
            <form onSubmit={handleSubmit(authenticate)}>
                <input type={"text"} {...register('username')}/>
                <input type={'text'} {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default AuthPage;