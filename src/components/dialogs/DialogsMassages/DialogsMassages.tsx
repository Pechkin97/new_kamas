import React from 'react';
import s from "./../Dialogs.module.css"
import Dialogs from "../Dialogs";
import {Route} from "react-router-dom";

const DialogsMassagesItem = (props: any) => {
    return (
        <div className={s.dialogsMassagesItem}>
            <Route path='/dialogs/*' element={<div>{props.author} +":" + {props.massage}</div>}/>
        </div>
    )
}

export default DialogsMassagesItem;

