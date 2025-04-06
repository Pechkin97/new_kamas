import React from 'react';
import s from "./Dialogs.module.css"
import DialogsNamesItem from "./DialogsNames/DialogsNames";
import DialogsMassagesItem from "./DialogsMassages/DialogsMassages";
import {Route, Routes} from "react-router-dom";

const Dialogs = (props: any) => {

    let dialogsElements = props.massages.dialogsData.map((el: { id: number, name: string, avatar: string, massagesData: object}, pos: number) =>
        <DialogsNamesItem key={pos} name={el.name} id={el.id}/>
    )

    let DialogsMassagesElements = props.massages.dialogsData.map((el: { id: number, name: string, avatar: string, massagesData: object}, pos: number) =>
        <Route path={`/dialogs/${el.name}`} element={<DialogsMassagesItem key={pos} name={el.name} avatar={el.avatar} massagesData={el.massagesData}/>}/>
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNames}>
                {dialogsElements}

            </div>
            <div className={s.dialogsMassages}>
                <Routes>
                    {DialogsMassagesElements}
                </Routes>
            </div>
        </div>
    )
}

export default Dialogs;

