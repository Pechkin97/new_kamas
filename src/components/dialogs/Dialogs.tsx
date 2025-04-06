import React from 'react';
import s from "./Dialogs.module.css"
import DialogsNamesItem from "./DialogsNames/DialogsNames";
import DialogsMassagesItem from "./DialogsMassages/DialogsMassages";
import {Routes} from "react-router-dom";

const Dialogs = (props: any) => {

    let dialogsElements = props.massages.dialogsData.map((el: { name: string, id: number }, pos: number) =>
        <DialogsNamesItem key={pos} name={el.name} id={el.id}/>
    )

    let DialogsMassagesElemets = props.massages.massagesData.map((el: { massage: string, id: number }, pos: number) =>
        <DialogsMassagesItem key={pos} massage={el.massage}/>
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNames}>
                {dialogsElements}

            </div>
            <div className={s.dialogsMassages}>
                <Routes>
                    {DialogsMassagesElemets}
                </Routes>
            </div>
        </div>
    )
}

export default Dialogs;

