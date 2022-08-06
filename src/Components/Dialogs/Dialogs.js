import React from 'react';
import b from './Dialogs.module.css'
import { Link, NavLink } from 'react-router-dom';

const Dialog = (props)=>{
    return (
        <div className ={b.dialog + '' + b.active }>
             <Link to={'/dialogs/' + props.id}>{props.name}</Link> 
             </div>
    )
    }

const Message = (props) => {
    return (
        <div className ={b.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
            <div className={b.dialogs} >

                <div className ={b.dialogItem}>
                    <Dialog name= 'Mike' id= '1'/>
                    <Dialog name= 'John' id= '3'/>
                    <Dialog name= 'Adam' id= '4'/>
                    <Dialog name= 'Piter' id= '5'/>
                </div>

                <div className ={b.messages}  >
                    <Message message= 'How'/>
                    <Message message= 'what is good'/>
                    <Message message= 'Ku-ku'/>
                    <Message message= 'Google'/>
                </div>


            </div>

    )
}

export default Dialogs;