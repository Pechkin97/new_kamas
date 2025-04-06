import React from 'react';
import s from '.././NavBar.module.css';

const BestFriends = (props: any) => {
    return (
        <div className={s.item}>
            <div>
                <img src={props.userAvatar} alt={props.userAvatar}/>
            </div>
            <div>
                {props.userName}
            </div>
        </div>
    )
}

export default BestFriends;

