import React from 'react';
import b from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

function Dialogs(props) {

    let dialogs = props.dataState.dialogPage.dialogsData.map(el => <DialogItem name={el.name} id={el.id} />);
    let messages = props.dataState.dialogPage.messagersData.map(el => <MessageItem message={el.message} id={el.id} />)

    return (
        <>
            <div className={b.dialogs}>
                <div >
                    {dialogs}
                </div>

                <div className={b.messages}>
                    {messages}
                    <textarea cols="40" rows="5"></textarea>
                    <div>
                        <button>Send</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Dialogs;
