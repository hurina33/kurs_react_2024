import React, {FC} from 'react';
import {IPostModel} from "../models/iPostModel";
import {PostsResponseModel} from "../models/PostsResponseModel";


const PostsComponent: FC<PostsResponseModel> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post:IPostModel)=>(<ul key={post.id}>
                    <li>
                        <h2>{post.title}</h2>
                        {post.body}
                        </li>
                </ul>))
            }
        </div>
    );
};

export default PostsComponent;