import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsNamesItem = (props: any) => {
    let path = "/dialogs/" + props.name
    return (
        <div className={s.dialogsNamesItem}>
            <NavLink to={path} className={({isActive}) => isActive ? s.active : ""}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsNamesItem;

