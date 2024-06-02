import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import {NavLink} from "react-router-dom";

const HeaderPage = () => {
    return (
        <div>
            <HeaderComponent/>
            <NavLink to={'users'}> users page</NavLink>
            <br/>
            <NavLink to={'posts'}>posts page</NavLink>
            <br/>
            <NavLink to={'comments'}>comments page</NavLink>
        </div>
    );
};

export default HeaderPage;