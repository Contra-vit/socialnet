import React from 'react';
import b from  './Myposts.module.css'
import Post from './Post';

const Myposts = () => {
    return (
        <div>
            
            <div>
                My posts
                <div>
                    <textarea cols="30" rows="10"></textarea>
                    <button>Add post</button>
                    <button>Remove</button>

                </div>
            </div>
            <div className={b.posts} >
              
              <Post message ='How are you?'/>
              <Post/>
              <Post/>
              <Post/>


            </div>
        </div>

    )
}

export default Myposts;