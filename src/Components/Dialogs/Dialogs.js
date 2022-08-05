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



const Dialogs = (props) => {
    

    return (
            <div className={b.dialogs} >

                <div className ={b.dialogItem}>
                    <Dialog name= 'Mike' id= '1'/>

                    <div className ={b.dialog}><NavLink to='/dialogs/2'>Kevin</NavLink></div>
                    <div className ={b.dialog}><Link to='/dialogs/3'> David</Link></div>
                    <div className ={b.dialog}><Link to='/dialogs/4'> Jack</Link></div>
                </div>

                <div className ={b.messages}  >
                    <div className ={b.message}>Hi</div>
                    <div className ={b.message}>What's up?</div>
                    <div className ={b.message}>Bussy</div>
                    <div className ={b.message}>Goodbuy</div>
                </div>


            </div>

    )
}

export default Dialogs;