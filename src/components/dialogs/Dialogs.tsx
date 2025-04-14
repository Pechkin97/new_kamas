import React from 'react';
import s from "./Dialogs.module.css"
import DialogsNamesItem from "./DialogsNames/DialogsNames";
import DialogsMassagesItem from "./DialogsMassages/DialogsMassages";
import {Route, Routes} from "react-router-dom";

const Dialogs = (props: any) => {

    let dialogsElements = props.massages.dialogsData.map((el: {
            id: number,
            name: string,
            avatar: string,
            massagesData: object
        }, pos: number) =>
            <DialogsNamesItem key={pos} name={el.name} id={el.id} avatar={el.avatar}/>
    )

    let DialogsMassagesElements = props.massages.dialogsData.map((el: {
            id: number,
            name: string,
            avatar: string,
            massagesData: object,
            newMassageText: string
        }, pos: number) =>
            <Route path={`/${el.name}`}
                   element={<DialogsMassagesItem
                       key={pos}
                       id={el.id}
                       name={el.name}
                       massagesData={el.massagesData}
                       dispatch={props.dispatch}
                       newMassageText={el.newMassageText}
                   />}/>
    )


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNames}>
                Chat's
                {dialogsElements}
            </div>
            <div className={s.dialogsMassages}>
                Massages in current chat
                <Routes>
                    {DialogsMassagesElements}
                </Routes>
            </div>
        </div>
    )
}

export default Dialogs;

