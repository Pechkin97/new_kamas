import React from 'react';
import s from '.././NavBar.module.css';

const NewMassages = (props: any) => {
    return (
        <div className={s.item}>
            <img src={props.userAvatar} alt={props.key}/>
            {props.massagesCount}
        </div>
    )
}

export default NewMassages;

