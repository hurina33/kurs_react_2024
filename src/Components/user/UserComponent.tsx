import React, {FC} from 'react';
import {IUserModel} from "../models/iUserModel";

interface IProps {
    user:IUserModel;
}
type IPropsType = IProps &{children?: React.ReactNode} & {lift?:(userId:number) => void};


const UserComponent:FC<IPropsType> = ({user,lift}) => {
    const onClickHandler = () => {
           if(lift) {
               lift(user.id)
        }
    }

    return (
        <div className={'user'}>
           <div> {user.id} {user.firstName} {user.lastName} {user.age} {user.gender}</div>
            <button className={'button'} onClick={onClickHandler}> Posts of user</button>
        </div>
    );
};

export default UserComponent;