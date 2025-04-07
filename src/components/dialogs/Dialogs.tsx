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
            <DialogsNamesItem key={pos} name={el.name} id={el.id}/>
    )

    let DialogsMassagesElements = props.massages.dialogsData.map((el: {
            id: number,
            name: string,
            avatar: string,
            massagesData: object
        }, pos: number) =>
            <Route path={`/${el.name}`}
                   element={<DialogsMassagesItem key={pos} name={el.name} avatar={el.avatar} massagesData={el.massagesData}
                                                 Pururu/>}/>
    )

    let newMassageElement = React.createRef<HTMLTextAreaElement>();

    let addMassage = () => {
        let text = (newMassageElement.current as HTMLTextAreaElement).value;
        alert(text);
    };
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
                <div>
                    <textarea ref={newMassageElement}/>
                </div>
                <div>
                    <button onClick={() => {
                        addMassage()
                    }}>Add Massage
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

