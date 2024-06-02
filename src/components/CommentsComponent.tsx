import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import {usersApiService} from "../services/api-service";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {
    const[comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        usersApiService
            .getAllComments()
            .then(value => setComments(value.data))
    }, []);
    return (
        <div>
            {comments.map(comment=> <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;