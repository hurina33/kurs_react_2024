import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {usersApiService} from "../services/api-service";
import UserComponent from "./UserComponent";

const UsersComponent:FC = () => {
    const[users,setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        usersApiService
            .getAllUsers()
            .then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;