import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {userApiService} from "../services/api-service";
import UserComponent from "./UserComponent";
import {NavLink} from "react-router-dom";

const UsersComponent:FC = () => {
    const[users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        userApiService
            .getAllUsers()
            .then(response=> setUsers(response.data))

    }, []);
    return (
        <div>

            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;