import React, {FC, useState} from 'react';
import './App.css';
import UsersComponent from "./Components/users/UsersComponent";
import PostsComponent from "./Components/posts/PostsComponent";
import {getAllPostsOfUser} from "./Components/services/api.service";
import {IPostModel} from "./Components/models/iPostModel";

const App: FC <any> = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])

const lift = (userId:number) => {
    getAllPostsOfUser(userId).then(({data: {posts}}) => {
        setPosts(posts);
    })
}
  return (
    <div className={'box'}>
        <div className={'users'}> <UsersComponent lift = {lift}/> </div>
        <div className={'posts'}> <PostsComponent posts = {posts}/> </div>
    </div>
  );

}

export default App;
