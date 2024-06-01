import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {IUserModel} from "../../models/IUserModel";


interface IProps{
    user:IUserModel,
}
const ContactComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            {user.email} <NavLink to={user.id.toString()} state={user}> details</NavLink>
        </div>
    );
};

export default ContactComponent;