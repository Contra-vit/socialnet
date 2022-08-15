import React from 'react';
import b from './Myposts.module.css'
import Post from './Post';

const Myposts = (props) => {

    let post = 
    props.posts.map(el => <Post  message={ el.post} likesCount = {el.likesCount} />
)
 let newPostElement = React.createRef();

function addPostIn() {
        // let text  = newPostElement.current.value;
        props.addPost()
    } 
let onPostChange = () =>{
    let text  = newPostElement.current.value;
    props.updateNewPost(text);
}

    return (
        <div className={b.postBlock}>
            <div >
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea 
                        cols="30" rows="10"
                        ref={newPostElement} 
                        onChange = {onPostChange} 
                        value={props.newPostText} />
                    </div>
                    <div className={b.buttons}>
                        <div>
                            <button onClick={addPostIn}>Add post</button>
                       
                            <button className={b.buttonRemove}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={b.posts} >
                {post }
                
            </div>
        </div>

    )
}

export default Myposts;