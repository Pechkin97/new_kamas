import React from 'react';
import s from "./../Dialogs.module.css"
import DialogsMassagesOneItem from "./DialogsMassagesOneitem/DialogsMassagesOneItem";

const DialogsMassagesItem = (props: any) => {

    let massagesList = props.massagesData.map((el: { id: number, author: string, massage: string }, pos: number) =>
        <DialogsMassagesOneItem key={pos} author={el.author} massage={el.massage}/>
    )

    return (

        <div>
            Hello
            {props.id}
            {massagesList}
        </div>

    )
}

export default DialogsMassagesItem;

