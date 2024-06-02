import React, {FC, useState} from 'react';
import {IPostModel} from "../models/IPostModel";

interface IProps{
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {

    return (
        <div>
            <span> {post.id} </span> {post.title}  <br/>
        </div>
    );
};

export default PostComponent;