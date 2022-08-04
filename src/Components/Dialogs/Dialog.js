import React from 'react';
import b from './Dialog.module.css'

const Dialog = (props) => {

    let inner = React.createRef();
    let count = 0;
    function likeCount(event) {
        count += 1;
        inner.current.textContent = count


    }
    return (
            <div className={b.content} >
                Dialog

            </div>

    )
}

export default Dialog;