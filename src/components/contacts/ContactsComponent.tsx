import React, {FC, useEffect, useState} from 'react';
import {userService} from "../../services/api-service";
import ContactComponent from "../contact/ContactComponent";
import {IUserModel} from "../../models/IUserModel";

const ContactsComponent:FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        userService
            .getUser()
            .then((value) => setUsers(value.data))

    }, []);

    return (
        <div>
            {
                users.map((user,id)=> (<ContactComponent key={id} user={user} />))
            }
        </div>
    );
};

export default ContactsComponent;