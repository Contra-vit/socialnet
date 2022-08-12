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

    function check() {
        var a = "1", b = 0, c = "false"; 
        return a || b ? b + !!c == a : c;

    }
    console.log('hi')

    let postsData  = [
        {id:1, post: 'How', likesCount:12},
        {id:2, post: 'I loose my mind', likesCount:12},
        {id:3, post: 'You gotta see it', likesCount:10},
        {id:4, post: 'Have a nice flight', likesCount:7}
    ]

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

                <Post message={ postsData[0].post} likesCount = {postsData[0].likesCount} />
                <Post message={ postsData[1].post} likesCount = {postsData[1].likesCount}/>
                <Post message={ postsData[2].post} likesCount = {postsData[1].likesCount}/>
                <Post message={ postsData[3].post} likesCount = {postsData[1].likesCount}/>
                <div>
                    {
                        
                        
                        
                    }
                    <button onClick={check}> Function </button>
                </div>


            </div>
        </div>

    )
}

export default Myposts;