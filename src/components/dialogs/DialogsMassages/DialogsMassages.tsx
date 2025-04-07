import React from 'react';
import DialogsMassagesOneItem from "./DialogsMassagesOneitem/DialogsMassagesOneItem";

const DialogsMassagesItem = (props: any) => {

    let massagesList = props.massagesData.map((el: { id: number, author: string, massage: string }, pos: number) =>
        <DialogsMassagesOneItem key={pos} author={el.author} massage={el.massage}/>
    )

    return (

        <div>
            {props.id}
            {massagesList}
        </div>

    )
}

export default DialogsMassagesItem;

