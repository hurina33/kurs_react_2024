import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <span> <NavLink to={'/'}>auth page</NavLink> </span>
           <br/>
           <span> <NavLink to={'cars'}>cars page</NavLink> </span>
        </div>
    );
};

export default HeaderComponent;