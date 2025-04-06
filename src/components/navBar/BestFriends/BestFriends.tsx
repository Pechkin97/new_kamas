import React from 'react';
import s from '.././NavBar.module.css';

const BestFriends = (props: any) => {
    return (
        <div className={s.item}>
            <img src={props.userAvatar} alt={props.key}/>
            {props.userName}
        </div>
    )
}

export default BestFriends;

