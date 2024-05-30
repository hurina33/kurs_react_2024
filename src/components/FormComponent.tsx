import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IPostModels} from "../modules/IPostModels";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidators} from "../validators/postValidators";
import {IFormModel} from "../modules/IFormModel";
import {postService} from "../services/api.service";

const FormComponent = () => {

    let {
        register,
        handleSubmit,
        formState:{errors,isValid}
    } = useForm<IFormModel>({mode:"all", resolver:joiResolver(postValidators)})

    const [post, setPost] = useState<IPostModels | null>(null)

    const save = (post: IFormModel)=>{
        postService
            .savePost(post)
            .then((value) => setPost(value.data))
        console.log(post)

    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} placeholder={'Title'} {...register('title')}/>
                {
                    errors.title && <div> {errors.title?.message}</div>
                }
                <input type={"text"} placeholder={'Body'} {...register('body')}/>
                {
                    errors.body && <div> {errors.body?.message}</div>
                }
                <input type={'number'} placeholder={'userId'} {...register('userId')}/>
                {
                    errors.userId && <div> {errors.userId?.message}</div>
                }
                <button> save me</button>
            </form>
            {post && <h3> POST:  {post.id} {post.body} {post.title} </h3>}

        </div>
    );
};

export default FormComponent;