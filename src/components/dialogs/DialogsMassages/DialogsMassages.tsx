import React from 'react';
import DialogsMassagesOneItem from "./DialogsMassagesOneitem/DialogsMassagesOneItem";
import {addMassageActionCreator, updateNewMassageTextActionCreator} from "../../../redux/state";

const DialogsMassagesItem = (props: any) => {

    let massagesList = props.massagesData.map((el: { id: number, author: string, massage: string }, pos: number) =>
        <DialogsMassagesOneItem key={pos} author={el.author} massage={el.massage}/>
    )

    let newMassageElement = React.createRef<HTMLTextAreaElement>();

    let addMassage = () => {
        props.dispatch(addMassageActionCreator())
    };

    let onMassageChange = () => {
        let text = (newMassageElement.current as HTMLTextAreaElement).value;
        props.dispatch(updateNewMassageTextActionCreator(text))
    }

    return (

        <div>
            {massagesList}
            <div>
                <textarea onChange={onMassageChange}
                          ref={newMassageElement}
                          value={props.profile.newMassageText}/>
            </div>
            <div>
                <button onClick={() => {
                    addMassage()
                }}>Add Massage
                </button>
            </div>
        </div>

    )
}

export default DialogsMassagesItem;

