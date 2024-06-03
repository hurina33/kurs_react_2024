import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {NavLink} from "react-router-dom";
interface IProps{
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            {post.id}{post.title}
            <NavLink to={post.id.toString()}> show comments of post </NavLink>
        </div>
    );
};

export default PostComponent;