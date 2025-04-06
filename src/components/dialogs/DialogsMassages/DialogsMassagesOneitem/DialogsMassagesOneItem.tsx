import React from 'react';
import s from "./../../Dialogs.module.css"

const DialogsMassagesOneItem = (props: any) => {

    return (
        <div className={s.dialogsMassagesItem}>
            {props.author}
            {props.massage}
        </div>
    )
}

export default DialogsMassagesOneItem;

