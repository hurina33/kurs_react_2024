import React, {FormEvent, useState} from 'react';

interface IProps{
    username:string;
    password:string;
}
const FormComponent = () => {
    const [formState, setFormState]= useState<IProps>({username:'default', password:'default' })

    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        let user = {
            username: formState.username,
            password: formState.password
        }
        console.log(user)

    }
    const handleChange =(e:FormEvent<HTMLInputElement>)=>{
        let input = e.currentTarget;
        setFormState({...formState, [input.name]: input.value})

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name={'username'} value={formState?.username} onChange={handleChange}/>
                <input type='text' name={'password'} value={formState?.password} onChange={handleChange}/>
                <button> save </button>
            </form>
        </div>
    );
};

export default FormComponent;