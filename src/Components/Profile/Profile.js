import React from 'react';
import Myposts from './Myposts/Post/Myposts';
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import b from './Profile.module.css'

const Profile = () => {
    return (
        <div className={b.content}>
            <ProfileInfo />
            <Myposts />
        </div>

    )
}

export default Profile;