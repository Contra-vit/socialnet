import React from 'react';
import Myposts from './Myposts/Post/Myposts';
import b from  './Profile.module.css'

const Profile = () => {
    return (
        <div className={b.content}>
            <div>Content</div>
            <img src="https://kulturologia.ru/files/u18172/1817201340.jpg" alt="" />
            <div>
                ava+ discription 
            </div>
           <Myposts/>
        </div>

    )
}

export default Profile;