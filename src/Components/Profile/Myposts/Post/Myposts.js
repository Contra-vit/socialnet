import React from 'react';
import b from './Myposts.module.css'
import Post from './Post';

const Myposts = () => {
    let textarea = React.createRef();
    // let textPost = React.createRef();

    function addPost() {
        console.log(textarea.current.textContent)
        // textPost.current.message = textarea.current.textContent;
    }

    return (
        <div className={b.postBlock}>

            <div >
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea cols="30" rows="10" ref={textarea}></textarea>
                    </div>
                    <div className={b.buttons}>
                        <div>
                            <button onClick={addPost}>Add post</button>
                       
                            <button className={b.buttonRemove}>Remove</button>
                        </div>

                    </div>

                </div>
            </div>
            <div className={b.posts} >

                <Post message='How are you?' />
                <Post />
                <Post />
                <Post />


            </div>
        </div>

    )
}

export default Myposts;