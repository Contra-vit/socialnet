import React from 'react';
import Myposts from './Myposts/Post/Myposts';
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import b from './Profile.module.css'

const Profile = (props) => {
    
    return (
        <div className={b.content}>
            <ProfileInfo />
            <Myposts 
            dataState = {props.dataState} 
            addPost={props.addPost}  
            updateNewPost = {props.updateNewPost}/>
        </div>

    )
}

export default Profile;