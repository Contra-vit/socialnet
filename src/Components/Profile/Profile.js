import React from 'react';
import Myposts from './Myposts/Post/Myposts';
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import b from './Profile.module.css'

const Profile = (props) => {
    
    return (
        <div className={b.content}>
            <ProfileInfo />
            <Myposts dataProfilePost = {props.dataAppPost}/>
        </div>

    )
}

export default Profile;