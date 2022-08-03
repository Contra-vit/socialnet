import React from 'react';
import b from  './Myposts.module.css'
import Post from './Post';

const Myposts = () => {
    let textarea =React.createRef();
    // let textPost = React.createRef();

    function addPost (){
        console.log(textarea.current.textContent)
        // textPost.current.message = textarea.current.textContent;
    }

    return (
        <div>
            
            <div>
                My posts
                <div>
                    <textarea cols="30" rows="10" ref= {textarea}>yuyuy</textarea>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>

                </div>
            </div>
            <div className={b.posts} >
              
              <Post message ='How are you?'/>
              <Post />
              <Post/>
              <Post/>


            </div>
        </div>

    )
}

export default Myposts;