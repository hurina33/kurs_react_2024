import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {NavLink} from "react-router-dom";

interface IProps{
    user: IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            {user.id} {user.name} {user.username}
            <NavLink to={user.id.toString()} state={{foo:'bar'}}>show posts of this user</NavLink>
            <br/>
        </div>
    );
};

export default UserComponent;