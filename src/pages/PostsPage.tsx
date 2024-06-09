import PostsComponent from "../components/PostsComponent";
import {useEffect, useState} from "react";
import {IPostModel} from "../models/IPostModel";
import {userApiService} from "../services/api-service";
import {Outlet, useLocation, useParams} from "react-router-dom";

const PostsPage = () => {
const {postId} = useParams()

    const location = useLocation();

    const[posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        if(postId) {
            userApiService
                .getPostsOfUser(postId)
                .then(value => setPosts(value.data))
        } else{
            userApiService
                .getAllPosts()
                .then(value => setPosts(value.data))
        }

    }, [postId]);
    return (
        <div>
            <PostsComponent posts={posts}/>
            <br/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;