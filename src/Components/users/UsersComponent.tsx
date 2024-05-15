import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/iUserModel";
import {getAllUsers} from "../services/api.service";
import UserComponent from "../user/UserComponent";


type IPropTypes = {lift?:(userId:number)=>void};
const UsersComponent:FC<IPropTypes> = ({lift}) => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        getAllUsers().then(({data:{users}})=> {
            console.log(users)
            setUsers(users);
        });
    }, []);

    return (
        <div>
            {
                users.map(
                    (user,index) =>
                        (<UserComponent
                            key={index}
                            user={user}
                            lift= {lift}/>
                        )
                )
            }


        </div>
    );
};

export default UsersComponent;


