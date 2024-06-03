import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";


export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {
                path: 'users', element: <UsersPage/>,
                children: [
                    {
                        path: ':id', element: <PostsPage/>,
                        children: [
                            {path: ':id', element: <CommentsPage/>}
                        ]
                    }],
            },
            {path: 'posts', element: <PostsPage/>, children:[
                    {path:':id',element: <CommentsPage/>}
                ]},
            {path: 'comments', element: <CommentsPage/>}
        ],
    }]
);
