import React from 'react';
import b from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

function Dialogs (props) {
    
    let dialogs = props.dataAdd.map(el => <DialogItem name={el.name} id={el.id} />);
    let messages =  props.dataAppMessage.map(el => <MessageItem message={el.message} id={el.id} />)

    return (
        <>
            <div className={b.dialogs}>
                <div >
                    {dialogs}
                </div>
                
                <div className={b.messages}>
                    {messages}
                </div>
            </div>

        </>
    )
}
export default Dialogs;
