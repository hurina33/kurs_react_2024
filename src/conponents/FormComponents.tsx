import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidators} from "../validators/user.validators";

interface IProps{
    username: string,
    password: string,
    age: number
}

const FormComponents:FC = () => {
    let {
        register,
        handleSubmit,
        formState:{errors, isValid}
    } = useForm<IProps>({mode:"all", resolver:joiResolver(userValidators)});

const formInfo = (formValues:IProps)=>{
    console.log(formValues)
}
    return (
        <div>
            <form onSubmit={handleSubmit(formInfo)}>
                <input type={'text'} {...register('username')}/>
                {
                    errors.username && <div> {errors.username.message}</div>
                }
                <input type={'text'} {...register('password')}/>
                {
                    errors.password && <div> {errors.password.message}</div>
                }
                <input type={'number'} {...register('age')}/>
                {
                    errors.age && <div> {errors.age.message}</div>
                }
                <button> save</button>
            </form>

        </div>
    );
};

export default FormComponents;