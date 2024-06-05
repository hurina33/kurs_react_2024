import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {IForm} from "../models/IForm";
import {authService} from "../services/api-services";


const FormComponent = () => {

    const{
        register,
        handleSubmit
    } = useForm<IForm>()

    const [isAuthState, setIsAuthState] = useState<boolean>(false)
    const authenticate = async (dataForm:IForm) => {
        const isAuth = await authService.authentication(dataForm);
        setIsAuthState(isAuth);
    };
    return (
        <div>
            <h1>Login form</h1>
            {isAuthState? <div>ok</div> : <div> not ok</div>}
            <form onClick={handleSubmit(authenticate)}>
                <input {...register('username')}/>
                <input {...register('password')}/>
                <button>login</button>
            </form>
        </div>
    );
};

export default FormComponent;