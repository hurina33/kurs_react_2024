import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";

export const routerConfig = createBrowserRouter([
    {path: '/',element: <MainLayout/>,
    children:[
        {path: 'users', element: <UsersPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'comments', element: <CommentsPage/>}
    ]}
])