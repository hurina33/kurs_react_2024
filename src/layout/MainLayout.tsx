import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderPage from "../pages/HeaderPage";
import FooterPage from "../pages/FooterPage";

const MainLayout = () => {
    return (
        <div>
            <HeaderPage/>
            <Outlet/>
            <FooterPage/>
        </div>
    );
};

export default MainLayout;