import React from 'react';

const DialogsMassagesOneItem = (props: any) => {

    return (
        <div>
            {props.author}
            {': '}
            {props.massage}
        </div>
    )
}

export default DialogsMassagesOneItem;

