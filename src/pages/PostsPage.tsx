import PostsComponent from "../components/PostsComponent";
import {useEffect, useState} from "react";
import {IPostModel} from "../models/IPostModel";
import {userApiService} from "../services/api-service";
import {Outlet, useLocation, useParams} from "react-router-dom";

const PostsPage = () => {
const {id} = useParams()

    const location = useLocation();
console.log(location) ///????? zachem eto

    const[posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        if(id) {
            userApiService
                .getPostsOfUser(id)
                .then(value => setPosts(value.data))
        } else{
            userApiService
                .getAllPosts()
                .then(value => setPosts(value.data))
        }

    }, []);
    return (
        <div>
            <PostsComponent posts={posts}/>
            <br/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;