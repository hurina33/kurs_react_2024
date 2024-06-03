import React, {FC} from 'react';
import CommentComponent from "./CommentComponent";
import {ICommentModel} from "../models/ICommentModel";

interface IProps{
    comments: ICommentModel[]
}
const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }

        </div>
    );
};

export default CommentsComponent;