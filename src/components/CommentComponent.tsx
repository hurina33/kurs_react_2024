import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface IProps{
    comment: ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            {comment.id} {comment.name}
        </div>
    );
};

export default CommentComponent;