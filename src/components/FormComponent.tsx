import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";

interface IProps {
    username: string;
    password: string;
    age: number,
}
const FormComponent:FC = () => {
    let {register,handleSubmit} = useForm<IProps>();

const formShow = ((formValues:IProps)=>{
    console.log(formValues)
})

    return (
        <div>
            <form onSubmit={handleSubmit(formShow)}>
                <input type='text' {...register('username')} />
                <input type='text' {...register('password')}/>
                <input type={'number'} {...register('age')}/>
                <button> save</button>
            </form>

            </div>
    );
};

export default FormComponent;