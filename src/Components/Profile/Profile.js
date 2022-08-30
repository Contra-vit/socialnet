import React from 'react';
import Myposts from './Myposts/Post/Myposts';
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import b from './Profile.module.css'

const Profile = (props) => {
    
    return (
        <div className={b.content}>
            <ProfileInfo />
            <Myposts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPost={props.updateNewPost} />
        </div>

    )
}

export default Profile;
 
