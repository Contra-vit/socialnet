import React from 'react';
import b from './Dialogs.module.css'
import { Link, NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={b.dialog + '' + b.active}>
            <Link to={'/dialogs/' + props.id}>{props.name}</Link>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={b.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Mike' },
        { id: 2, name: 'John' },
        { id: 3, name: 'Adam' },
        { id: 4, name: 'Piter' }]
    let messagersData = [
        { id: 1, message: 'How' },
        { id: 2, message: 'what is good' },
        { id: 3, message: 'Ku-ku' },
        { id: 4, message: 'Google Piter' }]
    let dialogs = dialogsData.map( el => <DialogItem name={el.name} id={el.id} />);
    let messages =  messagersData.map(el => <Message message={el.message} id={el.id} />)
    
return (
    <div className={b.dialogs} >

        <div className={b.dialogItem}>
            {dialogs}
        </div>

        <div className={b.messages}  >
            {messages}
        </div>

    </div>
)
}
export default Dialogs;