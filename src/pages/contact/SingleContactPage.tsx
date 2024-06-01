import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IUserModel} from "../../models/IUserModel";
import {userService} from "../../services/api-service";

const SingleContactPage = () => {

    const {id} = useParams()
    const {state} = useLocation()

    const [users, setUsers] = useState<IUserModel | null>(null)

    useEffect(() => {
        if (state){
            setUsers(state)
        } else if (id){
            userService
            .getUserById (id)
                .then(value => setUsers(value.data))
        }else{
            throw new Error('goodbye')
        }

    }, [id,state]);


    return (
        <div>
            {state && <>{state.name} {state.username} {state.phone}</>}

        </div>
    );
};

export default SingleContactPage;