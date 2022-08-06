import React from 'react';
import b from  './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={b.content}>
            <div>Content</div>
            <img src="https://kulturologia.ru/files/u18172/1817201340.jpg" alt="" />
            <div className= {b.descriptionBlock}>
                ava+ discription 
            </div>
        </div>
    )
}
export default ProfileInfo;