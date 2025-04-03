import React from 'react';
import s from "./../Dialogs.module.css"

    const DialogsMassagesItem = (props:any) => {
        return (
        <div className={s.dialogsMassagesItem}>
            {props.massage}
        </div>
    )
}

export default DialogsMassagesItem;

