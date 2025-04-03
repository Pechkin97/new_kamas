import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsNamesItem = (props: any) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialogsNamesItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const DialogsMassagesItem = (props: any) => {
    return (
        <div className={s.dialogsMassagesItem}>
            {props.massage}
        </div>
    )
}

const Dialogs = (props: any) => {

    let dialogsData = [
        {id: 1, name: 'Peter'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Jack'},
        {id: 4, name: 'Valery'},
        {id: 5, name: 'Nikolay'},
        {id: 6, name: 'Pavel'}
    ]

    let massagesData = [
        {id: 1, massage: 'Hello'},
        {id: 2, massage: 'I am learning React NOW!'},
        {id: 3, massage: 'So good'},
        {id: 4, massage: 'Be happy )'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNames}>
                {dialogsData.map((el) =>
                    <DialogsNamesItem name={el.name} id={el.id}/>
                )}

            </div>
            <div className={s.dialogsMassages}>
                {massagesData.map((el) =>
                    <DialogsMassagesItem massage={el.massage}/>
                )}
            </div>
        </div>
    )
}

export default Dialogs;

