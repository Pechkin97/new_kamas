import React from 'react';
import s from "./../Dialogs.module.css"
import {Route} from "react-router-dom";
import DialogsMassagesOneItem from "./DialogsMassagesOneitem/DialogsMassagesOneItem";

const DialogsMassagesItem = (props: any) => {

    let massagesList = props.massagesData.map((el: { id: number, author: string, massage: string }, pos: number) =>
        <DialogsMassagesOneItem key={pos} author={el.author} massage={el.massage}/>
    )

    return (

        <Route path={`/dialogs/${props.name}`} element={<div> {massagesList}</div>}/>

    )
}

export default DialogsMassagesItem;

