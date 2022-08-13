import { Link, NavLink } from 'react-router-dom';
import b from './../../Dialogs/Dialogs.module.css'


const DialogItem = (props) => {
    return (
        <div className={b.dialog + '' + b.active}>
            <Link to={'/dialogs/' + props.id}>{props.name}</Link>
        </div>
    )
}
export default DialogItem;