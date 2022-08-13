import { Link, NavLink } from 'react-router-dom';
import b from './../../Dialogs/Dialogs.module.css'

const MessageItem = (props) => {
    return (
        <div className={b.message}>{props.message}</div>
    )
}
export default MessageItem;