import React from 'react';
import s from '.././NavBar.module.css';

const NewMassages = (props: any) => {
    return (
        <div className={s.item}>
            <div>
                <img src={props.userAvatar} alt={props.key}/>
            </div>
            <div>
                <>{props.massagesCount}</>
            </div>
        </div>
    )
}

export default NewMassages;

