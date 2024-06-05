import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorLayout from "./layout/ErrorLayout";
import AuthPage from "./pages/AuthPage";
import CarsPage from "./pages/CarsPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index:true, element:<AuthPage/>},
            {path:'cars', element:<CarsPage/>}
        ]
    }
    ]
);

root.render( <RouterProvider router={browserRouter}/>)
