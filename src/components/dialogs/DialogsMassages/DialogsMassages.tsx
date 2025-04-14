import React from 'react';
import DialogsMassagesOneItem from "./DialogsMassagesOneitem/DialogsMassagesOneItem";
import {addMassageActionCreator, updateNewMassageTextActionCreator} from "../../../redux/state";

const DialogsMassagesItem = (props: any) => {

    let newMassageElement = React.createRef<HTMLTextAreaElement>();
    let onMassageChange = () => {
        let text = (newMassageElement.current as HTMLTextAreaElement).value;
        props.dispatch(updateNewMassageTextActionCreator(text, props.id));
    };
    let addMassage = () => {
        props.dispatch(addMassageActionCreator(props.id));
    };

    let massagesList = props.massagesData.map((el: { id: number, author: string, massage: string }, pos: number) =>
        <DialogsMassagesOneItem key={pos} author={el.author} massage={el.massage}/>
    )


    return (
        <div>
            {massagesList}
            <textarea onChange={onMassageChange}
                      placeholder={'Введите свое сообщение'}
                      ref={newMassageElement}
                      value={props.newMassageText}/>
            <button onClick={() => {
                addMassage()
            }}>
                Send massage
            </button>
        </div>

    )
}

export default DialogsMassagesItem;

