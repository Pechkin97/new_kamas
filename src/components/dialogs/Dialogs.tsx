import React from 'react';
import s from "./Dialogs.module.css"
import DialogsNamesItem from "./DialogsNames/DialogsNames";
import DialogsMassagesItem from "./DialogsMassages/DialogsMassages";
import {Route, Routes, BrowserRouter} from "react-router-dom";

const Dialogs = (props: any) => {

    let dialogsElements = props.massages.dialogsData.map((el: {
            id: number,
            name: string,
            avatar: string,
            massagesData: object
        }, pos: number) =>
            <DialogsNamesItem key={pos} name={el.name} id={el.id}/>
    )

    let DialogsMassagesElements = props.massages.dialogsData.map((el: {
            id: number,
            name: string,
            avatar: string,
            massagesData: object
        }, pos: number) =>
            <Route path={`/dialogs/${el.name}`}
                   element={<DialogsMassagesItem key={pos} name={el.name} avatar={el.avatar} massagesData={el.massagesData}
                                                 Pururu/>}/>
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsNames}>
                DialogsNames
                {dialogsElements}


            </div>
            <div className={s.dialogsMassages}>
                Massages
                <Routes>
                    {DialogsMassagesElements}
                </Routes>
            </div>
        </div>
    )
}

export default Dialogs;

