import React from 'react';
import s from "./Dialogs.module.css"
import DialogsNamesItem from "./DialogsNames/DialogsNames";
import DialogsMassagesItem from "./DialogsMassages/DialogsMassages";

const Dialogs = () => {

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

    let dialogsElements = dialogsData.map((el,pos) =>
        <DialogsNamesItem key={pos} name={el.name} id={el.id} />
    )

    let DialogsMassagesElemets = massagesData.map((el,pos) =>
        <DialogsMassagesItem key={pos} massage={el.massage}/>
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNames}>
                {dialogsElements}

            </div>
            <div className={s.dialogsMassages}>
                {DialogsMassagesElemets}
            </div>
        </div>
    )
}

export default Dialogs;

