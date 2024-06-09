import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ICommentModel} from "../models/ICommentModel";
import {userApiService} from "../services/api-service";
import CommentsComponent from "../components/CommentsComponent";

const CommentsPage = () => {
    const {id} = useParams()

    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        if (id) {
        userApiService
            .getCommentsOfPost(id)
            .then(value => setComments(value.data))
        } else {
            userApiService
                .getAllComments()
                .then(value => setComments(value.data))
        }

    }, [id]);
    return (
        <div>
                <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;